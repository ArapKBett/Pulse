export interface Session {
  userId: string;
  refreshToken: string;
  expiresAt: Date;
}

// PostgreSQL example (using TypeORM)
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("sessions")
export class SessionEntity {
  @PrimaryColumn()
  userId!: string;

  @Column()
  refreshToken!: string;

  @Column()
  expiresAt!: Date;
}
