import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/common/config/printer/printer.service';
import { TopCountry } from 'src/common/helpers/interfaces';
import {
  getCountriesStatisticsReport,
  getOrderByIdReport,
  getSvgChartReport,
} from 'src/common/reports/store';

@Injectable()
export class StoreReportsService extends PrismaClient implements OnModuleInit {
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async getOrderByIdReport(orderId: number) {
    const order = await this.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        customers: true,
        order_details: {
          include: {
            products: true,
          },
        },
      },
    });
    if (!order) throw new NotFoundException('Order not found');

    const docDefinition = getOrderByIdReport({
      data: order as any,
    });

    return this.printerService.createPdf(docDefinition);
  }

  async getSvgChart() {
    const docDefinition = await getSvgChartReport();

    return this.printerService.createPdf(docDefinition);
  }

  async getCountryStatistics(): Promise<any> {
    const topCountriesData = await this.getTopCountriesData();
    const mappedCountries = this.mapTopCountriesData(topCountriesData);

    const docDefinition = await getCountriesStatisticsReport({
      topCountries: mappedCountries,
    });

    return this.printerService.createPdf(docDefinition);
  }

  private async getTopCountriesData() {
    return this.customers.groupBy({
      by: ['country'],
      _count: true,
      orderBy: { _count: { country: 'desc' } },
      take: 10,
    });
  }

  private mapTopCountriesData(
    // El tipo se puede mejorar con un type custom
    data: (Prisma.PickEnumerable<
      Prisma.CustomersGroupByOutputType,
      'country'[]
    > & {
      _count: number;
    })[],
  ): TopCountry[] {
    return data.map(({ country, _count }) => ({ country, customers: _count }));
  }
}
