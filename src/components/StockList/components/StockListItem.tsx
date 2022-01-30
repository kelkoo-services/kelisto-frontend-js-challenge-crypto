import React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";

import { Stock } from "../../../types/stock";
import { CurrencyFormatter } from "../../../utils/currencyFormatter";
import { toSignedPercentage } from "../../../utils/toSignedPercentage";
import { getCryptoLogoUrl } from "../../../utils/getCryptoLogoUrl";

/**
 * Props for the {@link StockListItem} component
 */
interface StockListItemProps {
  stock: Stock;
}

/**
 * Props for the styled-component that styles the crypto logo
 */
interface StockLogoProps {
  url: string;
}

/**
 * Props for the styled-component that styles the stock variant representation
 */
interface StockVariantProps {
  color: string;
}

const StockListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: ${props => props.theme.fontSizes.text2};
  flex: 0 1 auto;
`;

const StockLogo = styled.div<StockLogoProps>`
  width: 40px;
  height: 40px;
  background-size: 40px;
  background-image: url(${props => props.url});
`;

const StockName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 1 auto;
`;

const StockFullName = styled.div`
  font-weight: 500;
`;

const StockSku = styled.div`
  color: ${props => props.theme.colors.neutral};
`;

const StockData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1 1 auto;
`;

const StockValue = styled.div``;

const StockVariant = styled.div<StockVariantProps>`
  font-size: ${props => props.theme.fontSizes.text3};
  color: ${props => props.color};
`;

/**
 * Renders an item of the {@link StockList}
 * @param stock The {@link Stock} that this component represents
 * @see {@link StockList}
 * @see {@link StockListItemProps}
 */
const StockListItem: Function = ({ stock }: StockListItemProps) => {
  const theme: DefaultTheme = useTheme();

  const getVariantColor: Function = (variant: number): string => {
    if (variant > 0) { return theme.colors.positive }
    else if (variant < 0) { return theme.colors.negative }
    else { return theme.colors.neutral }
  }

  return (
    <StockListItemWrapper>
      <StockLogo url={getCryptoLogoUrl(stock.sku)} />
      <StockName>
        <StockFullName>{stock.name}</StockFullName>
        <StockSku>{stock.sku}</StockSku>
      </StockName>
      <StockData>
        <StockValue>{CurrencyFormatter.format(stock.stock)}</StockValue>
        <StockVariant color={getVariantColor(stock.variant)}>{toSignedPercentage(stock.variant)}</StockVariant>
      </StockData>
    </StockListItemWrapper>
  );
}

export default StockListItem;
