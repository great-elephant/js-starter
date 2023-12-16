import { Entity, PrimaryGeneratedColumn, Column, Repository as TypeOrmRepository } from 'typeorm';
import { Repository } from '@cellularjs/typeorm';

@Entity('user_registration')
export class UserRegistrationEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column()
    email: string;

  @Column()
    password: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

  /**
   * 6 digits for account activation(email verification).
   * 
   * Eg: '182912'
   */
  @Column()
    activeKey: string;
}

export interface UserRegistrationRepository extends TypeOrmRepository<UserRegistrationEntity> { }

@Repository({ entity: UserRegistrationEntity })
export class UserRegistrationRepository { }
