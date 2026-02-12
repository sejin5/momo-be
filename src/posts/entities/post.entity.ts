import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { AuthorType } from 'src/types/enum';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  userId: number;

  @Column({
    type: 'enum',
    enum: AuthorType,
    default: 'GUEST',
  })
  authorType: AuthorType;

  @Column({ length: 200 })
  title: string;

  @Column()
  content: string;

  @Column({ type: 'datetime' })
  meetingDate: Date;

  @Column({ nullable: true })
  location: string;

  @Column({ default: false })
  isClosed: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ default: 0 })
  viewCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
}
