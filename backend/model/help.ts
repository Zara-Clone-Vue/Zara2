import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class helpuser{
    @PrimaryGeneratedColumn()
    idhelp!:number;

    @Column()
    namehelp!:string;

    @Column()
    deschelp!:string;

}