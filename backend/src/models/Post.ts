export interface Post {
  id: string;
  userId: string;
  date: string;
  text: string;
  likes: number;
  retweets: number;
  sentiment?: string;
}

// PostgreSQL example (using TypeORM)
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./User";

@Entity("posts")
export class PostEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  userId!: string;

  @Column()
  date!: string;

  @Column()
  text!: string;

  @Column()
  likes!: number;

  @Column()
  retweets!: number;

  @Column({ nullable: true })
  sentiment?: string;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;
}
