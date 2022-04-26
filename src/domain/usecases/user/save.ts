import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from 'src/domain/models/user.model';

const prisma = new PrismaClient();

@Injectable()
export class SaveUser {
  async call(user: User): Promise<any> {
    try {
      return prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {}
  }
}
