import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DonutChart } from '../utils/charts/donut.chart';
import { TopCountry } from 'src/common/helpers/interfaces';
import { FooterSection, HeaderSection } from '../utils/sections';
import { LineChart } from '../utils/charts/line.chart';
import { BarsChart } from '../utils/charts/bars.chart';

interface ReportValues {
  title?: string;
  subTitle?: string;
  topCountries: TopCountry[];
}

export const getCountriesStatisticsReport = async (
  options: ReportValues,
): Promise<TDocumentDefinitions> => {
  const { topCountries } = options;

  if (!topCountries || topCountries.length === 0) {
    throw new Error('Top countries data is required');
  }

  const [donutChart, lineChart, barsChart1, barsChart2] = await Promise.all([
    DonutChart.generate({
      entries: topCountries.map((country) => ({
        label: country.country,
        value: country.customers,
      })),
      position: 'left',
    }),

    LineChart.generate(),

    BarsChart.generate(),

    BarsChart.generate(),
  ]);

  return {
    pageMargins: [40, 100, 40, 60],
    header: HeaderSection({
      title: options.title ?? 'Country Statistics',
      subTitle: options.subTitle ?? 'Top 10 Countries by Customers',
    }),
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: 'Top 10 Countries by Customers',
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 10],
              },
              {
                image: donutChart,
                width: 300,
              },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['Country', 'Customers'],

                ...topCountries.map((country) => [
                  country.country,
                  country.customers,
                ]),
              ],
            },
          },
        ],
      },
      {
        text: 'Customers by Day',
        alignment: 'center',
        bold: true,
        margin: [0, 20, 0, 10],
      },
      {
        image: lineChart,
        width: 500,
        margin: [0, 0, 0, 20],
      },
      {
        text: 'Customers by Month',
        alignment: 'center',
        bold: true,
        margin: [0, 20, 0, 10],
      },
      {
        columnGap: 10,
        columns: [
          {
            image: barsChart1,
            width: 250,
          },
          {
            image: barsChart2,
            width: 250,
          },
        ],
      },
    ],
    footer: function (currentPage, pageCount) {
      return FooterSection({ currentPage, pageCount });
    },
  };
};
