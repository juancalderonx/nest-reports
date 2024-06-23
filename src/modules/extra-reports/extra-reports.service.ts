import { Injectable } from '@nestjs/common';
import { PrinterService } from '../../common/config/printer/printer.service';
import { getHtmlReport } from '../../common/reports/extra/html-report.report';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  async getHtmlReport() {
    const docDefinition = await getHtmlReport();

    return this.printerService.createPdf(docDefinition);
  }
}
