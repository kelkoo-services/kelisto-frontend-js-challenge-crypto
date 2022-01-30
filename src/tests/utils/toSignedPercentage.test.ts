import { toSignedPercentage } from "../../utils/toSignedPercentage";

test('properly formats the signed percentage', () => {
  const positiveValue: number = 1.23;
  const negativeValue: number = -4.56;
  const zeroValue: number = 0
  expect(toSignedPercentage(positiveValue)).toEqual('+1.23%');
  expect(toSignedPercentage(negativeValue)).toEqual('-4.56%');
  expect(toSignedPercentage(zeroValue)).toEqual('0%');
});
