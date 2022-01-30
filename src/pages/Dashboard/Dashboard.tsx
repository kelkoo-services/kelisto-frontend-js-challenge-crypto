import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Stock } from "../../types/stock";
import { DashboardHeader } from ".";
import { StockList } from "../../components/StockList";
import { CurrencyFormatter } from "../../utils/currencyFormatter";
import { DetailsPanel } from "../../components/DetailsPanel";
import { Button } from "../../components/Button";
import { PageWrapper } from "../../components/PageWrapper";
import { getStockSummary } from "../../api/stocksApi";

const DashboardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

/**
 * Renders the dashboard page
 * @see {@link DashboardHeader}
 * @see {@link DetailsPanel}
 * @see {@link StockList}
 */
const Dashboard: Function = () => {
  const history = useHistory();
  const [stocks, setStocks] = useState<Stock[]>([]);

  getStockSummary()
    .then(res => setStocks(res));

  return (
    <PageWrapper>
      <DashboardHeader
          balance={CurrencyFormatter.format(stocks.reduce((acc: number, curr: Stock) => acc + curr.stock, 0))}
      />
      <DetailsPanel
        title={'Recent'}
      >
        <DashboardDetailsWrapper>
          <StockList stocks={stocks} />
          <Button label={'Show all transactions'} onClick={() => history.push('/transactions')}/>
        </DashboardDetailsWrapper>
      </DetailsPanel>
    </PageWrapper>
  );
}

export default Dashboard;
