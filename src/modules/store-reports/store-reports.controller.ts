import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { StoreReportsService } from './store-reports.service';
import { Response } from 'express';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) {}

  @Get('orders/:orderId')
  async getOrderByIdReport(
    @Param('orderId', ParseIntPipe) orderId: string,
    @Res() res: Response,
  ) {
    const PDF = await this.storeReportsService.getOrderByIdReport(+orderId);

    res.setHeader('Content-Type', 'application/pdf');
    PDF.info.Title = 'Order Report';
    PDF.info.Author = 'Neron';
    PDF.pipe(res);
    PDF.end();
  }
}
