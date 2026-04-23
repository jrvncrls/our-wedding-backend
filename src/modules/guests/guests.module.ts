import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SUPABASE_CLIENT,
  createSupabaseClient,
} from '../../config/supabase.config.js';
import { GuestsController } from './guests.controller.js';
import { GuestsService } from './guests.service.js';

@Module({
  controllers: [GuestsController],
  providers: [
    GuestsService,
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService) =>
        createSupabaseClient(configService),
      inject: [ConfigService],
    },
  ],
})
export class GuestsModule {}
