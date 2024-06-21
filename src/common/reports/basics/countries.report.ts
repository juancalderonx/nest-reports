import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { FooterSection, HeaderSection } from '../sections';
import { countries as Country } from '@prisma/client';

interface ReportOptions {
  title?: string;
  subTitle?: string;
  countries: Country[];
}

export const getCountriesReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { title, subTitle, countries } = options;

  return {
    pageOrientation: 'landscape',

    header: HeaderSection({
      title: title ?? 'Countries Report',
      subTitle: subTitle ?? 'List of countries',
    }),

    pageMargins: [40, 100, 40, 60],

    content: [
      // Table of countries
      {
        layout: 'blueHeaders',
        table: {
          headerRows: 1,
          widths: [50, 50, 50, '*', '*', 50],

          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],

            ...countries.map((country) => [
              country.id.toString(),
              country.iso2,
              country.iso3,
              { text: country.name, bold: true },
              country.continent,
              country.local_name,
            ]),
          ],
        },
      },

      // Tabla de totales
      {
        text: 'Totales',
        style: {
          fontSize: 18,
          bold: true,
          margin: [0, 40, 0, 0],
        },
      },
      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          widths: [50, 50, 70, '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Total de países',
                colSpan: 2,
                bold: true,
              },
              {},
              {
                text: `${countries.length} países`,
                bold: true,
              },
              {},
              {},
              {},
            ],
          ],
        },
      },
    ],

    footer: function (currentPage, pageCount) {
      return FooterSection({ currentPage, pageCount });
    },
  };
};
