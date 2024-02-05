import { Injectable } from '@nestjs/common';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BillingsService {
  constructor(private prisma: PrismaService){}
  create(createBillingDto: CreateBillingDto) {
    return 'This action adds a new billing';
  }

  findAll() {
    return `This action returns all billings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billing`;
  }

  update(id: number, updateBillingDto: UpdateBillingDto) {
    return `This action updates a #${id} billing`;
  }

  remove(id: number) {
    return `This action removes a #${id} billing`;
  }
}
