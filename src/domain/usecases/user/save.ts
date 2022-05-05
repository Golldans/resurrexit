import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from 'src/domain/models/user.model';
import * as bcrypt from 'bcryptjs';
import { Salt } from 'src/shared/constants/salt';

const prisma = new PrismaClient();

@Injectable()
export class SaveUser {
  async call(user: User): Promise<any> {
    try {
      const hashedPassword = bcrypt.hashSync(user.password, Salt);

      return prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: hashedPassword,
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
