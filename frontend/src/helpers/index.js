export function formatDecimalNumber(n) {
  return new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL' }).format(n);
}