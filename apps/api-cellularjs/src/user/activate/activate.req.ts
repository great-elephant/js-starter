import { IsNotEmpty, Length, IsUUID } from 'class-validator';
import { Validate } from '$share/validator';

@Validate()
export class UserActivateReq {
  @IsUUID('4', { message: () => ('val.id.invalid') })
  @IsNotEmpty({ message: () => ('val.required') })
  sid: string;

  @Length(6, 6, { message: () => ('invalid_active_key') })
  @IsNotEmpty({ message: () => ('val.required') })
  activeKey: string;
}