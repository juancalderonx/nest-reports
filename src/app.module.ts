import { Module } from '@nestjs/common';
import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { PrinterModule } from './common/config/printer/printer.module';
import { StoreReportsModule } from './modules/store-reports/store-reports.module';
import { ExtraReportsModule } from './modules/extra-reports/extra-reports.module';

@Module({
  imports: [
    BasicReportsModule,
    StoreReportsModule,
    ExtraReportsModule,
    PrinterModule,
  ],
})
export class AppModule {}
