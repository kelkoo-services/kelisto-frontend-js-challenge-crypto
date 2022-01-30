import React from "react";
import styled from "styled-components";

import { Stock } from "../../types/stock";
import { StockListItem } from ".";

/**
 * Props for the {@link StockList} component
 */
interface StockListProps {
  stocks: Stock[];
}

const StockListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 16px;
`;

/**
 * Renders a list of {@link Stock}s
 * @param stocks The list of {@link Stock}s to render
 * @see {@link StockListItem}
 * @see {@link StockListProps}
 */
const StockList: Function = ({ stocks }: StockListProps) => {
  return (
      <StockListWrapper>
        {stocks.map(stock => <StockListItem key={stock.id} stock={stock}/>)}
      </StockListWrapper>
  );
}

export default StockList;
