import { ChartUtils } from 'src/common/helpers/chart-utils';

export class PolarAreaChart {
  static async generate(): Promise<string> {
    const config = this.createChartConfig();
    return ChartUtils.chartJsToImage(config);
  }

  private static createChartConfig() {
    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: ChartUtils.numbers(NUMBER_CFG),
          backgroundColor: [
            ChartUtils.transparentize(ChartUtils.NAMED_COLORS.red, 0.5),
            ChartUtils.transparentize(ChartUtils.NAMED_COLORS.orange, 0.5),
            ChartUtils.transparentize(ChartUtils.NAMED_COLORS.yellow, 0.5),
            ChartUtils.transparentize(ChartUtils.NAMED_COLORS.green, 0.5),
            ChartUtils.transparentize(ChartUtils.NAMED_COLORS.blue, 0.5),
          ],
        },
      ],
    };

    const config = {
      type: 'polarArea',
      data: data,
      options: {
        legend: {
          position: 'left',
        },
      },
    };

    return config;
  }
}
