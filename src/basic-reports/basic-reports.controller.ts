import { Controller, Get, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) {}

  @Get()
  async hello(@Res() res: Response) {
    const PDF = await this.basicReportsService.helloWorldPdf();

    res.setHeader('Content-Type', 'application/pdf');
    PDF.info.Title = 'Neron PDF';
    PDF.info.Author = 'Neron';
    PDF.pipe(res);
    PDF.end();
  }
}
