export function calculateRange(page: number, limit: number) {
  const from = (page - 1) * limit; // rows to skip
  return from;
}
