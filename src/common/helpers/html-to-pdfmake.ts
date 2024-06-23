import { Content } from 'pdfmake/interfaces';
import htmlToPdfMake from 'html-to-pdfmake';
import { JSDOM } from 'jsdom';

interface ContentReplacer {
  [key: string]: string;
}

export class HtmlToPDFMake {
  static getHtmlContent = async (
    html: string,
    replacers: ContentReplacer = {},
  ): Promise<Content> => {
    Object.entries(replacers).forEach(([key, value]) => {
      const keyPattern = `{{ ${key} }}`;
      const alternativeKeyPattern = `{{${key}}}`;

      html = html
        .replaceAll(keyPattern, value)
        .replaceAll(alternativeKeyPattern, value);
    });

    const { window } = new JSDOM();

    return htmlToPdfMake(html, { window });
  };
}
