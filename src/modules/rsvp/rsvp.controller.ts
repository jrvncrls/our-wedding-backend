import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GuestToken } from '../../common/decorators/guest.decorator.js';
import { UpsertRsvpDto } from './dto/upsert-rsvp.dto.js';
import { RsvpRecord, RsvpService } from './rsvp.service.js';

@ApiTags('rsvp')
@Controller('rsvp')
export class RsvpController {
  constructor(private readonly rsvpService: RsvpService) {}

  @Post()
  @ApiBody({ type: UpsertRsvpDto })
  @ApiOkResponse({ description: 'RSVP created or updated' })
  @ApiNotFoundResponse({ description: 'Guest not found' })
  upsert(
    @GuestToken() token: string,
    @Body() dto: UpsertRsvpDto,
  ): Promise<RsvpRecord> {
    return this.rsvpService.upsert(token, dto);
  }

  @Get(':token')
  @ApiParam({ name: 'token', description: 'Guest invite token' })
  @ApiOkResponse({ description: 'Current RSVP for guest' })
  @ApiNotFoundResponse({ description: 'RSVP not found' })
  findByToken(@Param('token') token: string): Promise<RsvpRecord> {
    return this.rsvpService.findByToken(token);
  }
}
