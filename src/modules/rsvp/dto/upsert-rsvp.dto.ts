import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpsertRsvpDto {
  @ApiProperty()
  @IsBoolean()
  attending!: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  dietary_requirements?: string;

  @ApiProperty()
  @IsBoolean()
  stay_the_night!: boolean;
}
