import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCompanyOffice1620737984673
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company_officers',
        columns: [
          {
            name: 'reg_id_number',
            type: 'varchar',
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'id_company',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            // Posso adiconar o nome que eu quiser
            name: 'FKCompany',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['id_company'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company_officers');
  }
}
