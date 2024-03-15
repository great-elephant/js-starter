import { IsEmail, IsDefined } from 'class-validator';

export class DummyDTO {
  @IsEmail({}, { message: () => t('error.unknown') })
  @IsDefined({ message: () => t('error.unknown') })
  email: string;
}
