import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class product{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    clothesName!:string;

    @Column()
    image!:string;

    @Column()
    price!:number;
    

    @Column()
    category!:string;

    @Column()
    rating!:number;

    @Column()
    times!:number;
}
