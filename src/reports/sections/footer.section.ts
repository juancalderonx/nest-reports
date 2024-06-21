import { Content, ContextPageSize } from 'pdfmake/interfaces';

interface FooterSectionOptions {
  currentPage: number;
  pageCount: number;
  pageSize?: ContextPageSize;
}

export const FooterSection = (options: FooterSectionOptions): Content => {
  const { currentPage, pageCount } = options;

  return {
    text: `Page ${currentPage} of ${pageCount}`,
    alignment: 'right',
    bold: true,
    fontSize: 12,
    margin: [0, 10, 35, 0],
  };
};
