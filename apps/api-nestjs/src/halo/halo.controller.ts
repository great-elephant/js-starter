import { Query, Controller, Get } from '@nestjs/common';
import { DummyDTO } from './halo.dto';

@Controller('')
export class HaloController {
  @Get('/')
  async yo(@Query() dummyDTO: DummyDTO) {
    return dummyDTO;
  }
}
