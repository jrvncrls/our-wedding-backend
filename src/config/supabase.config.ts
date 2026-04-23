import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

export const SUPABASE_CLIENT = 'SUPABASE_CLIENT';

export function createSupabaseClient(configService: ConfigService): SupabaseClient {
  const url = configService.getOrThrow<string>('SUPABASE_URL');
  const key = configService.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY');
  return createClient(url, key);
}
