import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';
import { ChartUtils } from 'src/common/helpers/chart-utils';

const generateChartImage = async (): Promise<string> => {
  const chartConfig = {
    type: 'bar',
    data: {
      labels: [2012, 2013, 2014, 2015, 2016],
      datasets: [
        {
          label: 'Users',
          data: [120, 60, 50, 180, 120],
        },
      ],
    },
  };

  return await ChartUtils.chartJsToImage(chartConfig);
};

const generateDonutChart = async () => {
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: ChartUtils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(ChartUtils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart',
      },
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  };

  return await ChartUtils.chartJsToImage(config);
};

export const getSvgChartReport = async (): Promise<TDocumentDefinitions> => {
  const svgContent = fs.readFileSync('src/assets/ford.svg', 'utf8');

  const [chart, donutChart] = await Promise.all([
    generateChartImage(),
    generateDonutChart(),
  ]);

  return {
    content: [
      {
        svg: svgContent,
        width: 100,
        fit: [100, 100],
      },
      {
        image: chart,
        width: 500,
      },
      {
        image: donutChart,
        width: 500,
      },
    ],
  };
};
