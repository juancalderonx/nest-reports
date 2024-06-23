import { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from 'fs';
import { HtmlToPDFMake } from 'src/common/helpers';
import { FooterSection, HeaderSection } from '../utils/sections';

export const getHtmlReport = async () => {
  const html = fs.readFileSync(
    'src/common/reports/html/complex.report.html',
    'utf-8',
  );

  const content = await HtmlToPDFMake.getHtmlContent(html, {
    customerName: 'Esteban Calderón',
    customerEmail: 'esteban@neron.com',
  });

  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 110, 40, 60],
    header: HeaderSection({
      title: 'HTML to PDFMake Report',
      subTitle: 'This is a sample report generated from HTML content',
    }),
    content: content,
    footer: function (currentPage, pageCount) {
      return FooterSection({ currentPage, pageCount });
    },
  };

  return docDefinition;
};
