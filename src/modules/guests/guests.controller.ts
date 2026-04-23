import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { GuestResponseDto } from './dto/guest-response.dto.js';
import { GuestsService } from './guests.service.js';

@ApiTags('guests')
@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get(':token')
  @ApiParam({ name: 'token', description: 'Guest invite token' })
  @ApiOkResponse({ type: GuestResponseDto })
  @ApiNotFoundResponse({ description: 'Guest not found' })
  findByToken(@Param('token') token: string): Promise<GuestResponseDto> {
    return this.guestsService.findByToken(token);
  }
}
