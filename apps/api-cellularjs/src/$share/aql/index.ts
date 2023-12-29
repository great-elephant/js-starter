import { IsEnum, IsNumber, IsObject, IsOptional } from 'class-validator';
import { Validate } from '$share/validator';
import { BadRequest } from '$share/msg';

export function createAqlClass<S, W>(select: S) {
  @Validate({
    dataGetter: (irq) => {
      try {
        return irq.body;
      } catch {
        throw BadRequest({ msg: 'aql in invalid' });
      }
    },
  })
  class Anonymous {
    @IsEnum(select as any, { each: true })
    @IsOptional()
    select?: S;

    @IsObject()
    @IsOptional()
    where?: W;

    @IsNumber({}, { message: () => ('val.number.invalid') })
    @IsOptional()
    page?: number;

    @IsNumber({}, { message: () => ('val.number.invalid') })
    @IsOptional()
    limit: number;
  }

  return Anonymous;
}