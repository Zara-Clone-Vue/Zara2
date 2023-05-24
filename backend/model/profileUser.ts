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
  password!: string; 

  @Column()
  adress!: string;

  @Column()  
  isAdmin!:number;
}
