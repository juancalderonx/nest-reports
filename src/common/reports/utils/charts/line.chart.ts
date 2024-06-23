import { ChartUtils } from 'src/common/helpers/chart-utils';

export class LineChart {
  static async generate(): Promise<string> {
    const config = this.createChartConfig();

    return ChartUtils.chartJsToImage(config, { width: 400, height: 200 });
  }

  private static createChartConfig() {
    const data = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [
        {
          label: 'Dataset',
          data: ChartUtils.numbers({ count: 6, min: -100, max: 100 }),
          borderColor: ChartUtils.NAMED_COLORS.blue,
          backgroundColor: ChartUtils.transparentize(
            ChartUtils.NAMED_COLORS.blue,
            0.5,
          ),
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15,
        },
      ],
    };

    const config = {
      type: 'line',
      data: data,
    };

    return config;
  }
}
