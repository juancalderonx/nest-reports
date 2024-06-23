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

  @Get('svg-chart')
  async getSvgChart(@Res() res: Response) {
    const PDF = await this.storeReportsService.getSvgChart();

    res.setHeader('Content-Type', 'application/pdf');
    PDF.info.Title = 'SVG Charts Report';
    PDF.info.Author = 'Neron';
    PDF.pipe(res);
    PDF.end();
  }

  @Get('country-statistics')
  async getCountryStatistics(@Res() res: Response) {
    const PDF = await this.storeReportsService.getCountryStatistics();

    res.setHeader('Content-Type', 'application/pdf');
    PDF.info.Title = 'Country Statistics Report';
    PDF.info.Author = 'Neron';
    PDF.pipe(res);
    PDF.end();
  }
}
