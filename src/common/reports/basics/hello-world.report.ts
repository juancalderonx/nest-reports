import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name: string;
}

/**
 * Returns a simple PDF document definition with a "Hello, world!" message.
 * @returns The PDF document definition.
 */
export const getHelloWorldReport = (options: ReportOptions) => {
  const { name } = options;

  const docDefinition: TDocumentDefinitions = {
    content: [`¡Hello, ${name}!`],
  };

  return docDefinition;
};
