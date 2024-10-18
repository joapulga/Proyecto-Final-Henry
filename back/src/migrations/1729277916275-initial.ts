import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1729277916275 implements MigrationInterface {
    name = 'Initial1729277916275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "states" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "description" character varying(255) NOT NULL, CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shares" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number_share" integer NOT NULL, "expirate_date" date NOT NULL, "paid_date" date NOT NULL, "capital" numeric(10,2) NOT NULL, "interes" numeric(10,2) NOT NULL, "amount" numeric(10,2) NOT NULL, "creditId" uuid, "stateId" uuid, CONSTRAINT "PK_b88473409066c43c2ccb1894a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "credits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "months" integer NOT NULL, "interest" numeric(10,2) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "stateId" uuid, CONSTRAINT "PK_45cea097fd0ee625d2e840ed99c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "lastname" character varying(20) NOT NULL, "dni" character varying(10), "phone" character varying(20), "email" character varying(100) NOT NULL, "password" character varying(200), "is_admin" boolean NOT NULL DEFAULT false, "img_url" character varying DEFAULT 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=', "stateId" uuid, CONSTRAINT "UQ_5fe9cfa518b76c96518a206b350" UNIQUE ("dni"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "balances" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "income" numeric(10,4) NOT NULL, "expenses" numeric(10,4) NOT NULL, "gain" numeric(10,4) NOT NULL, "observations" character varying(255) NOT NULL, CONSTRAINT "PK_74904758e813e401abc3d4261c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shares" ADD CONSTRAINT "FK_0030680271f6c875a818cea1626" FOREIGN KEY ("creditId") REFERENCES "credits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shares" ADD CONSTRAINT "FK_f7308a444ca4b8aa0f0946ef1da" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credits" ADD CONSTRAINT "FK_564c4ffe9a4dea0c7d003fe42ff" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "credits" ADD CONSTRAINT "FK_38638c8fdcfba71e4e0c05b7b74" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_17bdaad57c3360aae9fb9a1741f" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_17bdaad57c3360aae9fb9a1741f"`);
        await queryRunner.query(`ALTER TABLE "credits" DROP CONSTRAINT "FK_38638c8fdcfba71e4e0c05b7b74"`);
        await queryRunner.query(`ALTER TABLE "credits" DROP CONSTRAINT "FK_564c4ffe9a4dea0c7d003fe42ff"`);
        await queryRunner.query(`ALTER TABLE "shares" DROP CONSTRAINT "FK_f7308a444ca4b8aa0f0946ef1da"`);
        await queryRunner.query(`ALTER TABLE "shares" DROP CONSTRAINT "FK_0030680271f6c875a818cea1626"`);
        await queryRunner.query(`DROP TABLE "balances"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "credits"`);
        await queryRunner.query(`DROP TABLE "shares"`);
        await queryRunner.query(`DROP TABLE "states"`);
    }

}
