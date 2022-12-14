import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

import { Role } from '../models/roles.enum';

@InputType()
export class CreateAuthenticationDto {
  @IsEmail()
  @IsString()
  @Field(() => String, { description: 'The email of user' })
  email: string;

  @MinLength(6)
  @IsString()
  @Field(() => String, { description: 'The password of user' })
  password: string;

  @IsUrl()
  @IsString()
  @IsOptional()
  @Field(() => String, {
    description: 'The avatar image url of user',
    nullable: true,
  })
  avatar?: string;

  
}
