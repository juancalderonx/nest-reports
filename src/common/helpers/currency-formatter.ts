export class CurrencyFormatter {
  private static formatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
  });

  static formatCurrency(value: number): string {
    return this.formatter.format(value);
  }
}
