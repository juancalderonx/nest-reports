import { ChartUtils } from 'src/common/helpers/chart-utils';

interface DonutEntry {
  label: string;
  value: number;
}

interface DonutOptions {
  title?: string;
  subTitle?: string;
  position?: 'top' | 'left' | 'bottom' | 'right';
  entries: DonutEntry[];
}

export class DonutChart {
  static async generate(options: DonutOptions): Promise<string> {
    const { entries, position = 'top' } = options;
    const config = this.createChartConfig(entries, position);

    return ChartUtils.chartJsToImage(config);
  }

  private static createChartConfig(entries: DonutEntry[], position: string) {
    const data = {
      labels: entries.map((entry) => entry.label),
      datasets: [
        {
          label: 'Dataset 1',
          data: entries.map((entry) => entry.value),
          backgroundColor: Object.values(ChartUtils.CHART_COLORS),
        },
      ],
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        legend: { position },
        plugins: {
          datalabels: {
            color: 'black',
            font: {
              weight: 'bold',
              size: 14,
            },
          },
        },
      },
    };

    return config;
  }
}
