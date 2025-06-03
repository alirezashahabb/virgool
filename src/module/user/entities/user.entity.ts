import { BaseEntity } from "src/common/abstract/base.entity";
import { EntityName } from "src/common/enum/entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, UpdateDateColumn } from "typeorm";
import { OtpEntity } from "./otp.entity";

@Entity(EntityName.User)

export class UserEntity extends BaseEntity {
    @Column({ unique: true, nullable: false })
    userName: string;
    @Column({ unique: true, nullable: true })
    phone: string;
    @Column({ unique: true, nullable: true })
    email: string;
    @Column({ unique: true, nullable: true })
    password: string;
    @Column({ nullable: true })
    otpId: number;
    @OneToOne(() => OtpEntity, otp => otp.user , {nullable : true,})
    @JoinColumn()
    otp: OtpEntity;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;



}
