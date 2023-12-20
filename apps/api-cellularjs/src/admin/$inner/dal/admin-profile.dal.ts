import { Entity, PrimaryColumn, Column, Repository as TypeOrmRepository } from 'typeorm';
import { Repository } from '@cellularjs/typeorm';
import { AdminRole } from '@sdks/types-admin';

@Entity('admin_profile')
export class AdminProfileEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ enum: AdminRole })
  role: AdminRole;

  @Column({ default: null })
  avatar: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}

export interface AdminProfileRepository extends TypeOrmRepository<AdminProfileEntity> { }

@Repository({ entity: AdminProfileEntity })
export class AdminProfileRepository { }
