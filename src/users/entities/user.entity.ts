import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Phone } from './phone.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @OneToMany(() => Phone, (phone) => phone.user, { eager: true })
  phones: Phone[];
}
