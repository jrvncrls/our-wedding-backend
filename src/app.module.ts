import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GuestsModule } from './modules/guests/guests.module.js';
import { RsvpModule } from './modules/rsvp/rsvp.module.js';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GuestsModule, RsvpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
