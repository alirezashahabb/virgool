import { BaseEntity } from "src/common/abstract/base.entity";
import { EntityName } from "src/common/enum/entity";
import { Column, Entity } from "typeorm";

@Entity(EntityName.Prifle)

export class ProfileEntity extends BaseEntity {
@Column()
nickName: string;
@Column({nullable : true,})
bio: string;
@Column({nullable : true,})
image_profile: string;
@Column({nullable : true,})
bg_image: string;
@Column({nullable : true,})
gender: string;
@Column({nullable : true,})
birthay: Date;
@Column({nullable : true,})
Linkdeen: string;



}
