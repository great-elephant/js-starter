import { CommonModule } from '$share/common';
import { Cell } from '@cellularjs/net';

@Cell({
  imports: [CommonModule],
  listen: {},
})
export class User { }
