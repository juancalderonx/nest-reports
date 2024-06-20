import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

interface HeaderSectionOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

/**
 * Builds the header section for the document
 * @param options HeaderSectionOptions object with the options for the header section
 * @returns Content object with the header section
 */
export const HeaderSection = (options: HeaderSectionOptions): Content => {
  const { showLogo = true, showDate = true, title } = options;

  const headerLogo: Content = showLogo ? logo : null;
  const headerDate: Content = showDate ? buildDate() : null;
  const headerTitle: Content = title ? buildTitle(title) : null;

  return {
    columns: [
      { width: 'auto', stack: [headerLogo] },
      { width: '*', text: '' },
      { width: 'auto', stack: [headerTitle, headerDate] },
    ],
  };
};

/**
 * Builds the date content for the header section
 * @returns Content object with the date
 */
export const buildDate = (): Content => {
  return {
    text: DateFormatter.formatDate(new Date()),
    alignment: 'right',
    margin: [20, 20],
  };
};

/**
 * Builds the title content for the header section
 * @param title string with the title for the document
 * @returns Content object with the title
 */
export const buildTitle = (title: string): Content => {
  return {
    text: title,
    style: {
      bold: true,
    },
    margin: [0, 0, 0, 10],
  };
};
