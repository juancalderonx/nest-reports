export class DateFormatter {
  private static formatter = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  static formatDate(date: Date): string {
    return this.formatter.format(date);
  }
}
