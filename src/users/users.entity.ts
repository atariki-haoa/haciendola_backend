import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 160 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100, nullable: true })
  image: string;
}