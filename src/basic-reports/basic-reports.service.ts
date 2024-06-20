import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer/printer.service';
import {
  getEmploymentLetterReport,
  getHelloWorldReport,
} from '../reports/basic';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async helloWorldPdf() {
    const docDefinition = getHelloWorldReport({ name: 'Neron' });

    return this.printerService.createPdf(docDefinition);
  }

  async employmentLetterPdf() {
    const docDefinition = getEmploymentLetterReport();

    return this.printerService.createPdf(docDefinition);
  }
}
