import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer/printer.service';
import { getEmploymentLetterReport, getHelloWorldReport } from '../reports';

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

  async employmentLetterPdf(employeeId: number) {
    const employee = await this.employees.findUnique({
      where: { id: employeeId },
    });

    if (!employee) throw new NotFoundException('Employee not found');

    const docDefinition = getEmploymentLetterReport({
      employerName: 'Esteban Calderón',
      employerPosition: 'CEO',
      employerCompany: 'Neron Solutions',
      employeeHours: employee.hours_per_day,
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeWorkSchedule: employee.work_schedule,
    });

    return this.printerService.createPdf(docDefinition);
  }
}
