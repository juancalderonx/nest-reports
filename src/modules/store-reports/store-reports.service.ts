import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/common/config/printer/printer.service';
import { getOrderByIdReport } from 'src/common/reports/store';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async getOrderByIdReport(orderId: number) {
    const order = await this.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        customers: true,
        order_details: {
          include: {
            products: true,
          },
        },
      },
    });
    if (!order) throw new NotFoundException('Order not found');

    const docDefinition = getOrderByIdReport({
      data: order as any,
    });

    return this.printerService.createPdf(docDefinition);
  }
}
