import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { SUPABASE_CLIENT } from '../../config/supabase.config.js';
import { GuestResponseDto } from './dto/guest-response.dto.js';

@Injectable()
export class GuestsService {
  constructor(
    @Inject(SUPABASE_CLIENT) private readonly supabase: SupabaseClient,
  ) {}

  async findByToken(token: string): Promise<GuestResponseDto> {
    const { data, error } = await this.supabase
      .from('guests')
      .select('*')
      .eq('token', token)
      .single();

    if (error || !data) {
      throw new NotFoundException('Guest not found');
    }

    await this.supabase
      .from('guests')
      .update({ last_open_link_date: new Date().toISOString() })
      .eq('token', token);

    return data as GuestResponseDto;
  }
}
