import { Module } from '@nestjs/common';
import { BillingsService } from './billings.service';
import { BillingsController } from './billings.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BillingsController],
  providers: [BillingsService],
  imports: [PrismaModule ]
})
export class BillingsModule {}
