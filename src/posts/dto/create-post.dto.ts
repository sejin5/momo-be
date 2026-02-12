import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  // 기본 정보
  @ApiProperty({ example: '주말 등산 모임' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  title: string;

  @ApiProperty({ example: '같이 북한산 등산하실 분 구합니다!' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: '2026-04-25T14:00:00' })
  @IsNotEmpty()
  @IsDateString()
  meetingDate: string;

  @ApiPropertyOptional({ example: '서울 북한산' })
  @IsOptional()
  @IsString()
  location?: string;
}
