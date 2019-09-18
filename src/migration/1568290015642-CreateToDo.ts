import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateToDo1568290015642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "to_do" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "completed" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "completed_at" TIMESTAMP NOT NULL, "notes" text NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_19d14b861427e18d619639c8f2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "to_do"`);
    }

}
