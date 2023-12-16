import { Entity, PrimaryColumn, Column, Repository as TypeOrmRepository } from 'typeorm';
import { Repository } from '@cellularjs/typeorm';

@Entity('user_profile')
export class UserProfileEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  pid: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: null })
  avatar: string;

  @Column({ type: 'timestamptz' })
  createdAt: string;
}

export interface UserProfileRepository extends TypeOrmRepository<UserProfileEntity> { }

@Repository({ entity: UserProfileEntity })
export class UserProfileRepository { }
