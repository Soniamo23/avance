import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BillingsModule } from './billings/billings.module';

@Module({
  imports: [PrismaModule, BillingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
