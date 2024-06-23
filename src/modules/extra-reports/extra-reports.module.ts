import { Module } from '@nestjs/common';
import { ExtraReportsService } from './extra-reports.service';
import { ExtraReportsController } from './extra-reports.controller';

@Module({
  controllers: [ExtraReportsController],
  providers: [ExtraReportsService],
})
export class ExtraReportsModule {}
