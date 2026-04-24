import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types.js';

export const SUPABASE_CLIENT = 'SUPABASE_CLIENT';

export type TypedSupabaseClient = SupabaseClient<Database>;

export function createSupabaseClient(
  configService: ConfigService,
): TypedSupabaseClient {
  const url = configService.getOrThrow<string>('SUPABASE_URL');
  const key = configService.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY');
  return createClient<Database>(url, key);
}
