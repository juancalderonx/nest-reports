import { Module } from '@nestjs/common';
import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { PrinterModule } from './common/config/printer/printer.module';
import { StoreReportsModule } from './modules/store-reports/store-reports.module';

@Module({
  imports: [BasicReportsModule, StoreReportsModule, PrinterModule],
})
export class AppModule {}
