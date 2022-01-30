/**
 * Interface that defines a stock
 * @interface
 */
export interface Stock {
  /** The ID of the stock */
  id: string;
  /** The name of the stock */
  name: string;
  /** The SKU of the stock */
  sku: string;
  /** The value of the stock */
  stock: number;
  /** The variant of the stock */
  variant: number;
}
