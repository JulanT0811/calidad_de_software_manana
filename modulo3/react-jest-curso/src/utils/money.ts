export function formatMoney(amount: number, currency = "USD"): string {
  if (Number.isNaN(amount)) throw new Error("amount inválido");
  if (!Number.isFinite(amount)) throw new Error("amount inválido");

  const fixed = amount.toFixed(2);

  return `${currency} ${fixed}`;
}