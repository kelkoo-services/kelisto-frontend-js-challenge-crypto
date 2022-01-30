/**
 * Creates a signed percentage representation of a number
 * @param n The number to represent as a signed percentage
 */
export const toSignedPercentage: Function = (n: number): string => (n <= 0 ? '' : '+') + n + '%';
