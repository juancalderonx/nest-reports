import { Injectable } from '@nestjs/common';
import { PrinterService } from '../../common/config/printer/printer.service';
import { getHtmlReport } from '../../common/reports/extra/html-report.report';
import { getQuotation } from '../../common/reports/extra/quotation.report';
import { getCustomSizeReport } from '../../common/reports/extra/custom-size.report';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  async getHtmlReport() {
    const docDefinition = await getHtmlReport();

    return this.printerService.createPdf(docDefinition);
  }

  async getQuotation() {
    const docDefinition = await getQuotation();

    return this.printerService.createPdf(docDefinition);
  }

  async getCustomSizeReport() {
    const docDefinition = await getCustomSizeReport();

    return this.printerService.createPdf(docDefinition);
  }
}
