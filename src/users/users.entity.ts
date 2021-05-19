import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100, unique: true })
  username: string;

  @Column('varchar', { length: 100, unique: true })
  email: string;

  @Column('varchar', { length: 100 })
  password: string;

  @Column('int', { nullable: true })
  role: UserRole;
}

export interface IUser extends BaseEntity {
  username: string;
  password: string;
  email: string;
  role: UserRole;
}

export enum UserRole {
  Admin = 1,
  User = 2,
}