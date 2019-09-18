import {MigrationInterface, QueryRunner} from "typeorm";

export class completedAtUpdate1568291116443 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" ALTER COLUMN "completed_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" ALTER COLUMN "completed_at" SET NOT NULL`);
    }

}
