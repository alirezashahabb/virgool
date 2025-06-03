import { BaseEntity } from "src/common/abstract/base.entity";
import { EntityName } from "src/common/enum/entity";
import { Column, Entity, OneToOne } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity(EntityName.otp)

export class OtpEntity extends BaseEntity {
    @Column()
    code: string;
    @Column()
    expiresIn: Date;
    @Column()
    userId: number;
    @OneToOne(() => UserEntity, user => user.otp, { onDelete: "CASCADE" },
    )
    user: UserEntity;




}
