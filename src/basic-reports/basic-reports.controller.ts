import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
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

  @Get('employment-letter/:employeeId')
  async employmentLetter(
    @Param('employeeId', ParseIntPipe) employeeId: string,
    @Res() res: Response,
  ) {
    const PDF = await this.basicReportsService.employmentLetterPdf(+employeeId);

    res.setHeader('Content-Type', 'application/pdf');
    PDF.info.Title = 'Employment Letter';
    PDF.info.Author = 'Neron';
    PDF.pipe(res);
    PDF.end();
  }
}
