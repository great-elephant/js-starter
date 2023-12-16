import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserProfile1702728129223 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_profile',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'pid',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'firstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lastName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            default: null,
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamptz',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_profile');
  }

}
