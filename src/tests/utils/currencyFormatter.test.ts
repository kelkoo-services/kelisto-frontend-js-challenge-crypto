import { CurrencyFormatter } from "../../utils/currencyFormatter";

test('properly formats the currency', () => {
  const numberValue: number = 1234.5;
  const formattedCurrency: string = CurrencyFormatter.format(numberValue);
  expect(formattedCurrency).toEqual('$1,234.50');
});
