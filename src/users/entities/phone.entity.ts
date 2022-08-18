import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('phones')
export class Phone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  number: string;

  @ManyToOne(() => User, (user) => user.phones)
  user: User;
}
