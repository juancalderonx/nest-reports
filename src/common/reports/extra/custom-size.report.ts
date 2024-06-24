import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCustomSizeReport = async (): Promise<TDocumentDefinitions> => {
  return {
    // Page Size for small ticket for POS system
    pageSize: {
      width: 200,
      height: 200,
    },
    content: [
      {
        qr: 'https://www.google.com',
        fit: 100,
        alignment: 'center',
      },
      {
        text: 'Reporte con tamaño personalizado',
        fontSize: 20,
        alignment: 'center',
        margin: [0, 20],
      },
    ],
  };
};
