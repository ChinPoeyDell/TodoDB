import {MigrationInterface, QueryRunner} from "typeorm";

export class changeEntity1568776594113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" ALTER COLUMN "created_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "to_do" ALTER COLUMN "created_at" SET NOT NULL`);
    }

}
