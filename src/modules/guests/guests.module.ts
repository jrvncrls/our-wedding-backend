import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GuestsController } from './guests.controller.js';
import { GuestsService } from './guests.service.js';
import { SUPABASE_CLIENT, createSupabaseClient } from '../../config/supabase.config.js';

@Module({
  controllers: [GuestsController],
  providers: [
    GuestsService,
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService) => createSupabaseClient(configService),
      inject: [ConfigService],
    },
  ],
})
export class GuestsModule {}
