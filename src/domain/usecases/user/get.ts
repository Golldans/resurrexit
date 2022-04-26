import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class GetUser {
  async call(id: number): Promise<any> {
    const userId = Number(id);
    try {
      return prisma.user.findFirst({
        where: {
          id: userId,
        },
      });
    } catch (error) {}
  }
}
