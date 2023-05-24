import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';   
@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  adress!: string;

  @Column()
  password!: string; 

  @Column()  
  isAdmin!:number
}
