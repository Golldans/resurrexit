import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ListUsers {
  async call(): Promise<any[]> {
    try {
      return prisma.user.findMany();
    } catch (error) {}
  }
}
