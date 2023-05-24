import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';   
@Entity({ name: 'user' })
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
