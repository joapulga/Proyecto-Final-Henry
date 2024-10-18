import { MigrationInterface, QueryRunner } from "typeorm";

export class Seeder1729277942036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO states (name, description) VALUES ('Active', 'Define if the yield is active')")
        await queryRunner.query("INSERT INTO states (name, description) VALUES ('Blocked', 'Define if the yield is blocked')")
        await queryRunner.query("INSERT INTO states (name, description) VALUES ('Removed', 'Define if the yield is removed')")
        await queryRunner.query("INSERT INTO states (name, description) VALUES ('Paid', 'Define if the yield is paid')")
        await queryRunner.query("INSERT INTO states (name, description) VALUES ('Currente', 'Define if the yield is current')")
        await queryRunner.query("INSERT INTO states (name, description) VALUES ('Defeated', 'Define if the yield is defeated')")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM states WHERE name = 'Active'")
        await queryRunner.query("DELETE FROM states WHERE name = 'Blocked'")
        await queryRunner.query("DELETE FROM states WHERE name = 'Removed'")
        await queryRunner.query("DELETE FROM states WHERE name = 'Paid'")
        await queryRunner.query("DELETE FROM states WHERE name = 'Currente'")
        await queryRunner.query("DELETE FROM states WHERE name = 'Defeated'")
        }

}
