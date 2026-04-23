import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GuestResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  token!: string;

  @ApiProperty()
  first_name!: string;

  @ApiProperty()
  last_name!: string;

  @ApiPropertyOptional()
  nickname?: string | null;

  @ApiPropertyOptional()
  email?: string | null;

  @ApiPropertyOptional()
  last_open_link_date?: string | null;

  @ApiProperty()
  created_at!: string;
}
