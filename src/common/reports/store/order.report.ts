import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { CurrencyFormatter, DateFormatter } from 'src/common/helpers';
import { FooterSection } from '../utils/sections';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 100,
  height: 30,
  margin: [10, 30],
};

const styles: StyleDictionary = {
  header: {
    fontSize: 20,
    bold: true,
    margin: [0, 20, 0, 0],
  },
  subHeader: {
    fontSize: 16,
    bold: true,
    margin: [0, 15, 0, 0],
  },
};

export interface CompleteOrder {
  order_id: number;
  customer_id: number;
  order_date: Date;
  customers: Customers;
  order_details: OrderDetail[];
}

export interface Customers {
  customer_id: number;
  customer_name: string;
  contact_name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface OrderDetail {
  order_detail_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  products: Products;
}

export interface Products {
  product_id: number;
  product_name: string;
  category_id: number;
  unit: string;
  price: string;
}

interface ReportValues {
  title?: string;
  subTitle?: string;
  data: CompleteOrder;
}

export const getOrderByIdReport = (
  value: ReportValues,
): TDocumentDefinitions => {
  const { customers, order_details, order_date, order_id } = value.data;

  const subTotal = order_details.reduce(
    (acc, detail) => acc + detail.quantity * +detail.products.price,
    0,
  );

  const total = subTotal * 1.19; // 19% tax

  return {
    styles,
    pageMargins: [40, 60, 40, 60],
    header: logo,

    content: [
      // Headers
      {
        text: 'Neron Solutions',
        style: 'header',
      },

      // Address and order receipt
      {
        columns: [
          {
            text: 'Edificio Neron, Poblado, Medellín \n Medellín, Colombia \n BN: 1234567890 \n https://neron.com.co',
          },
          {
            text: [
              {
                text: `Order receipt ${order_id} \n`,
                bold: true,
                fontSize: 14,
              },

              'Date:',
              {
                text: `${DateFormatter.formatDate(order_date)} \n`,
                bold: true,
              },

              'Pay before: ',
              {
                text: `${DateFormatter.formatDate(new Date())} \n`,
                bold: true,
              },
            ],
            alignment: 'right',
          },
        ],
      },

      // QR Code
      {
        qr: 'https://www.instagram.com/juancalderonx/',
        fit: 75,
        alignment: 'right',
      },

      // Customer data
      {
        text: [
          { text: 'Charge to: \n', style: 'subHeader' },
          `Name: ${customers.customer_name} \n`,
          `NIT: ${customers.customer_id} \n`,
          `Address: ${customers.address} \n`,
        ],
      },

      // Order details
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: [50, '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Description', 'Quantity', 'Price', 'Total'],

            ...order_details.map((detail) => [
              detail.order_detail_id.toString(),
              detail.products.product_name,
              detail.quantity.toString(),
              {
                text: CurrencyFormatter.formatCurrency(+detail.products.price),
                alignment: 'right',
              },
              {
                text: CurrencyFormatter.formatCurrency(
                  +detail.products.price * detail.quantity,
                ),
                alignment: 'right',
              },
            ]),
          ],
        },
      },

      // Line break
      '\n',

      // Total
      {
        columns: [
          {
            width: '*',
            text: '',
          },
          {
            width: 'auto',
            layout: 'noBorders',
            table: {
              body: [
                [
                  'Subtotal',
                  {
                    text: CurrencyFormatter.formatCurrency(subTotal),
                    alignment: 'right',
                  },
                ],
                [
                  { text: 'Total', bold: true },
                  {
                    text: CurrencyFormatter.formatCurrency(total),
                    alignment: 'right',
                    bold: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],

    footer: function (currentPage, pageCount) {
      return FooterSection({ currentPage, pageCount });
    },
  };
};
