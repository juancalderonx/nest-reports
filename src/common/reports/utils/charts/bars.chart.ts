import { ChartUtils } from 'src/common/helpers/chart-utils';

export class BarsChart {
  static async generate(): Promise<string> {
    const config = this.createChartConfig();

    return ChartUtils.chartJsToImage(config);
  }

  private static createChartConfig() {
    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
    const labels = ChartUtils.months({ count: 7 });
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Fully Rounded',
          data: ChartUtils.numbers(NUMBER_CFG),
          borderColor: ChartUtils.NAMED_COLORS.red,
          backgroundColor: ChartUtils.transparentize(
            ChartUtils.NAMED_COLORS.red,
            0.5,
          ),
          borderWidth: 2,
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
        },
        {
          label: 'Small Radius',
          data: ChartUtils.numbers(NUMBER_CFG),
          borderColor: ChartUtils.NAMED_COLORS.blue,
          backgroundColor: ChartUtils.transparentize(
            ChartUtils.NAMED_COLORS.blue,
            0.5,
          ),
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
    };

    return config;
  }
}
