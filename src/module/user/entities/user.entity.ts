import { BaseEntity } from "src/common/abstract/base.entity";
import { EntityName } from "src/common/enum/entity";
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity(EntityName.User)

export class UserEntity extends BaseEntity {
    @Column({ unique: true, nullable: false })
    userName: string;
    @Column({ unique: true, nullable: true })
    mobile: string;
    @Column({ unique: true, nullable: true })
    email: string;
    @Column({ unique: true, nullable: true })
    password: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;



}
