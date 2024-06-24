import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { CurrencyFormatter } from 'src/common/helpers';
import { FooterSection } from '../utils/sections';

export const getQuotation = async (): Promise<TDocumentDefinitions> => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      // Header
      {
        columns: [
          {
            image: 'src/assets/tucan-code-logo.png',
            width: 50,
          },
          {
            text: 'Neron Solutions \n RUT: 1234567890 \n Medellín, Colombia \n +57 123 456 7890',
            alignment: 'center',
            bold: true,
          },
          {
            layout: 'borderBlue',
            alignment: 'right',
            width: 140,
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    alignment: 'left',
                    table: {
                      body: [
                        ['Budget Number:', { text: '123456', bold: true }],
                        ['Fecha:', '12/12/2020'],
                        ['Cotización:', '123456'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },

      // Horizontal Line
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3A4546',
          },
        ],
      },

      // Customer Information
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            // Título
            [
              {
                text: 'DATOS DEL CLIENTE',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
                colSpan: 4,
                border: [true, true, true, true],
              },
              {},
              {},
              {},
            ],

            // Razón Social y Dirección
            [
              {
                text: 'RAZÓN SOCIAL',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Neron Solutions',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'DIRECCIÓN',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Medellín, Colombia',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // RUT y Teléfono
            [
              {
                text: 'RUT',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '1234567890',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'TELÉFONO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '+57 123 456 7890',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // Giro y Condición de Pago
            [
              {
                text: 'GIRO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Desarrollo de Software',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'CONDICIÓN DE PAGO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '30 días',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // Espacio en blanco
            [
              {
                text: '',
                fillColor: 'white',
                color: 'white',
                bold: true,
                colSpan: 4,
              },
              {},
              {},
              {},
            ],

            // Nombre del proyecto y contacto
            [
              {
                text: 'NOMBRE DEL PROYECTO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Sistema de Facturación',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'CONTACTO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Gabriel Calderón',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // Dirección y email
            [
              {
                text: 'DIRECCIÓN',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Medellín, Colombia',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'EMAIL',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'gabriel@neron.com',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // Ciudad y teléfono
            [
              {
                text: 'CIUDAD',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Medellín, Colombia',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'TELÉFONO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '+57 123 456 7890',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // Espacio en blanco
            [
              {
                text: '',
                fillColor: 'white',
                color: 'white',
                bold: true,
                colSpan: 4,
              },
              {},
              {},
              {},
            ],

            // Vendedor y email del vendedor
            [
              {
                text: 'VENDEDOR',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'VENDEDOR DE NERON',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: 'EMAIL',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'sales@neron.com',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
            ],

            // Teléfono del vendedor y fecha
            [
              {
                text: 'TELÉFONO',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '+57 123 456 7890',
                fillColor: 'white',
                color: 'black',
                bold: true,
              },
              {
                text: '',
                fillColor: '#343a40',
              },
              {
                text: '',
                fillColor: 'white',
              },
            ],
          ],
        },
      },

      // Horizontal Line
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3A4546',
          },
        ],
      },

      // Message
      {
        table: {
          widths: ['*'],
          body: [
            // Título
            [
              {
                text: 'ESTIMADO CLIENTE: NOS PERMITIMOS COTIZAR A USTED LOS SIGUIENTES ITEMS',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
                border: [true, true, true, true],
              },
            ],
            [
              {
                text: '\n',
                fillColor: 'white',
                border: [false, false, false, false],
              },
            ],
          ],
        },
      },

      // Quotation table items
      {
        margin: [0, 0, 0, 0],
        alignment: 'center',
        table: {
          headerRows: 1,
          widths: ['auto', 'auto', 'auto', '*', 80, 'auto', 'auto'],
          body: [
            // Table header
            [
              {
                text: 'ID',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
              {
                text: 'RECINTO',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
              {
                text: 'CANTIDAD',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
              {
                text: 'DESCRIPCIÓN',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
              {
                text: 'UNIDAD',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
              {
                text: 'PRECIO UNITARIO',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
              {
                text: 'TOTAL',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
              },
            ],

            // Items
            [
              {
                text: '1',
              },
              {
                text: 'Bodega 1',
              },
              {
                text: '7',
              },
              {
                text: 'Dior Sauvage EDT 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(650000),
              },
              {
                text: CurrencyFormatter.formatCurrency(4550000),
              },
            ],

            [
              {
                text: '2',
              },
              {
                text: 'Bodega 2',
              },
              {
                text: '3',
              },
              {
                text: 'Versace Eros Flame 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(540000),
              },
              {
                text: CurrencyFormatter.formatCurrency(1620000),
              },
            ],

            [
              {
                text: '3',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Arabians Tonka 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '4',
              },
              {
                text: 'Bodega 1',
              },
              {
                text: '7',
              },
              {
                text: 'Bad Boy Extreme Carolina Herrera 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(630000),
              },
              {
                text: CurrencyFormatter.formatCurrency(4410000),
              },
            ],

            [
              {
                text: '5',
              },
              {
                text: 'Bodega 2',
              },
              {
                text: '3',
              },
              {
                text: 'Dolce Gabanna Light Blue 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(380000),
              },
              {
                text: CurrencyFormatter.formatCurrency(1140000),
              },
            ],

            [
              {
                text: '6',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Armani Code Absolu 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(380000),
              },
              {
                text: CurrencyFormatter.formatCurrency(380000),
              },
            ],

            [
              {
                text: '7',
              },
              {
                text: 'Bodega 1',
              },
              {
                text: '7',
              },
              {
                text: 'Jean Paul Gaultier Le Male Le Parfum 125ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(620000),
              },
              {
                text: CurrencyFormatter.formatCurrency(4340000),
              },
            ],

            [
              {
                text: '8',
              },
              {
                text: 'Bodega 2',
              },
              {
                text: '3',
              },
              {
                text: 'Paco Rabanne Invictus Victory 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(480000),
              },
              {
                text: CurrencyFormatter.formatCurrency(1440000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],

            [
              {
                text: '9',
              },
              {
                text: 'Bodega 3',
              },
              {
                text: '1',
              },
              {
                text: 'Dolce Gabanna K Eau de Parfum 100ml',
              },
              {
                text: 'und',
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
              {
                text: CurrencyFormatter.formatCurrency(500000),
              },
            ],
          ],
        },
      },

      // Total
      {
        margin: [0, 30],
        columns: [
          {
            width: '*',
            text: '',
          },
          {
            width: 'auto',
            table: {
              body: [
                [
                  {
                    text: 'Subtotal',
                    fillColor: '#5775e1',
                    color: 'white',
                    bold: true,
                  },
                  {
                    text: CurrencyFormatter.formatCurrency(23880000),
                    fillColor: '#343a40',
                    alignment: 'right',
                    color: 'white',
                    bold: true,
                  },
                ],
                [
                  {
                    text: 'IVA (19%)',
                    fillColor: '#5775e1',
                    color: 'white',
                    bold: true,
                  },
                  {
                    text: CurrencyFormatter.formatCurrency(4537200),
                    fillColor: '#343a40',
                    alignment: 'right',
                    color: 'white',
                    bold: true,
                  },
                ],
                [
                  {
                    text: 'Total',
                    fillColor: '#5775e1',
                    color: 'white',
                    bold: true,
                  },
                  {
                    text: CurrencyFormatter.formatCurrency(28417200),
                    fillColor: '#343a40',
                    alignment: 'right',
                    color: 'white',
                    bold: true,
                  },
                ],
              ],
            },
          },
        ],
      },

      // Observations
      {
        margin: [0, 30, 0, 0],
        table: {
          widths: ['*'],
          body: [
            [
              {
                text: 'OBSERVACIONES',
                fillColor: '#5775e1',
                color: 'white',
                bold: true,
                border: [true, true, true, true],
              },
            ],
            [
              {
                text: 'Este documento es una cotización, y no implica obligación de compra por parte del cliente.',
                fillColor: 'white',
                border: [false, false, false, false],
              },
            ],
            [
              {
                text: 'Gracias por preferirnos.',
                fillColor: 'white',
                border: [false, false, false, false],
              },
            ],
            [
              {
                text: 'Neron Solutions',
                fillColor: 'white',
                border: [false, false, false, false],
              },
            ],
            [
              {
                text: 'Nuestras políticas de garantía y devolución están disponibles en nuestro sitio web.',
                fillColor: 'white',
                border: [false, false, false, false],
              },
            ],
            [
              {
                text: 'www.neron.com',
                fillColor: 'white',
                border: [false, false, false, false],
              },
            ],
          ],
        },
      },

      // Footer
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3A4546',
          },
        ],
      },
    ],
    footer: function (currentPage: number, pageCount: number) {
      return FooterSection({ currentPage, pageCount });
    },
  };

  return docDefinition;
};
