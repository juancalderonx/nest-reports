import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/common/helpers';

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
  const { showLogo = true, showDate = true, title, subTitle } = options;

  const headerLogo: Content = showLogo ? logo : null;
  const headerDate: Content = showDate ? buildDate() : null;
  const headerTitle: Content = title ? buildTitle(title, subTitle) : null;

  return {
    columns: [headerLogo, headerTitle, headerDate],
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
    margin: [20, 30],
    width: 150,
  };
};

/**
 * Builds the title content for the header section
 * @param title string with the title for the document
 * @returns Content object with the title
 */
export const buildTitle = (title: string, subTitle?: string): Content => {
  const headerSubTitle: Content = subTitle ? buildSubTitle(subTitle) : null;

  return {
    stack: [
      {
        text: title,
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: {
          fontSize: 22,
          bold: true,
        },
      },
      headerSubTitle,
    ],
  };
};

/**
 * Builds the subtitle content for the header section
 * @param subTitle string with the subtitle for the document
 * @returns Content object with the subtitle
 */
export const buildSubTitle = (subTitle: string): Content => {
  return {
    text: subTitle,
    alignment: 'center',
    margin: [0, 2, 0, 0],
    style: {
      fontSize: 16,
      bold: true,
    },
  };
};
