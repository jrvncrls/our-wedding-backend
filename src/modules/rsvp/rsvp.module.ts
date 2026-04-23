import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RsvpController } from './rsvp.controller.js';
import { RsvpService } from './rsvp.service.js';
import { SUPABASE_CLIENT, createSupabaseClient } from '../../config/supabase.config.js';

@Module({
  controllers: [RsvpController],
  providers: [
    RsvpService,
    {
      provide: SUPABASE_CLIENT,
      useFactory: (configService: ConfigService) => createSupabaseClient(configService),
      inject: [ConfigService],
    },
  ],
})
export class RsvpModule {}
