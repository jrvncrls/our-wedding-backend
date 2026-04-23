import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiNotFoundResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { GuestsService } from './guests.service.js';
import { GuestResponseDto } from './dto/guest-response.dto.js';

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
