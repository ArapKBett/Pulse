export interface User {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

// PostgreSQL example (using TypeORM)
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  username!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
