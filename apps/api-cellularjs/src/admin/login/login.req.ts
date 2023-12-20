import { IsNotEmpty, IsEmail, MaxLength } from 'class-validator';
import { Validate } from '$share/validator';

@Validate()
export class AdminLoginReq {
  /**
   * @see https://stackoverflow.com/a/574698/17059212
   */
  @MaxLength(254, { message: () => ('val.string.max_length') })
  @IsEmail({}, { message: () => ('val.email.invalid') })
  @IsNotEmpty({ message: () => ('val.required') })
  email: string;

  @MaxLength(256, { message: () => ('val.string.max_length') })
  @IsNotEmpty({ message: () => ('val.required') })
  password: string;
}

