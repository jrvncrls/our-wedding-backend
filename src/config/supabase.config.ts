import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

export const SUPABASE_CLIENT = 'SUPABASE_CLIENT';

export function createSupabaseClient(configService: ConfigService) {
  const url = configService.getOrThrow<string>('SUPABASE_URL');
  const key = configService.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY');
  return createClient(url, key);
}
