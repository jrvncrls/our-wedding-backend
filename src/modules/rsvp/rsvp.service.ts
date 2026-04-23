import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../../config/supabase.config.js';
import { UpsertRsvpDto } from './dto/upsert-rsvp.dto.js';

export interface RsvpRecord {
  id: string;
  guest_id: string;
  attending: boolean;
  dietary_requirements: string | null;
  stay_the_night: boolean;
  created_at: string;
  updated_at: string;
}

@Injectable()
export class RsvpService {
  constructor(@Inject(SUPABASE_CLIENT) private readonly supabase: SupabaseClient) {}

  async upsert(token: string, dto: UpsertRsvpDto): Promise<RsvpRecord> {
    const guest = await this.getGuestByToken(token);

    const { data, error } = await this.supabase
      .from('rsvp')
      .upsert(
        {
          guest_id: guest.id,
          attending: dto.attending,
          dietary_requirements: dto.dietary_requirements ?? null,
          stay_the_night: dto.stay_the_night,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'guest_id' },
      )
      .select()
      .single();

    if (error || !data) {
      throw new Error('Failed to upsert RSVP');
    }

    return data as RsvpRecord;
  }

  async findByToken(token: string): Promise<RsvpRecord> {
    const guest = await this.getGuestByToken(token);

    const { data, error } = await this.supabase
      .from('rsvp')
      .select('*')
      .eq('guest_id', guest.id)
      .single();

    if (error || !data) {
      throw new NotFoundException('RSVP not found');
    }

    return data as RsvpRecord;
  }

  private async getGuestByToken(token: string): Promise<{ id: string }> {
    const { data, error } = await this.supabase
      .from('guests')
      .select('id')
      .eq('token', token)
      .single();

    if (error || !data) {
      throw new NotFoundException('Guest not found');
    }

    return data as { id: string };
  }
}
