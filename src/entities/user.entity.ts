import { Column } from "typeorm";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column({nullable:false, default:'new user'})
    nom : string

    @Column({nullable:false})
    prenom : string

    @Column({nullable:false})
    email :string

    @Column({nullable:false,default:'123456'})
    password : string

}