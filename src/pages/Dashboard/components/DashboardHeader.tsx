import React from "react";
import styled from "styled-components";

/**
 * Props for the {@link DashboardHeader} component
 */
interface DashboardHeaderProps {
  balance: number
}

const StockSummaryHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  padding: 23px 0 32px;
`;

const StockSummaryHeaderTitle = styled.div`
  color: ${props => props.theme.colors.primaryLight};
  font-size: ${props => props.theme.fontSizes.text3};
`;

const StockSummaryHeaderBalance = styled.div`
  color: ${props => props.theme.colors.contrast};
  font-size: ${props => props.theme.fontSizes.text1};
`;

/**
 * Renders the header of the dashboard
 * @param balance The total stock balance
 * @see {@link DashboardHeaderProps}
 */
const DashboardHeader: Function = ({ balance }: DashboardHeaderProps) => {
  return (
    <StockSummaryHeaderWrapper>
      <StockSummaryHeaderTitle>Your balance</StockSummaryHeaderTitle>
      <StockSummaryHeaderBalance>{balance}</StockSummaryHeaderBalance>
    </StockSummaryHeaderWrapper>
  );
}

export default DashboardHeader;