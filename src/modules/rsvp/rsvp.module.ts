import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SUPABASE_CLIENT,
  createSupabaseClient,
} from '../../config/supabase.config.js';
import { RsvpController } from './rsvp.controller.js';
import { RsvpService } from './rsvp.service.js';

@Module({
  controllers: [RsvpController],
  providers: [
    RsvpService,
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService) =>
        createSupabaseClient(configService),
      inject: [ConfigService],
    },
  ],
})
export class RsvpModule {}
