import React from "react";
import styled from "styled-components";

/**
 * Props for the {@link DetailsPanel} component
 */
interface DetailsPanelProps {
  title: string;
  children: React.ReactChildren
}

const DetailsPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => props.theme.colors.contrast};
  padding: 28px 16px;
  border-top-left-radius: ${props => props.theme.borderRadius.border2};
  border-top-right-radius: ${props => props.theme.borderRadius.border2};
`;

const DetailsPanelTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.text2};
  color: ${props => props.theme.colors.neutral};
  padding: 0 16px
`;

/**
 * Renders a detail panel to host page details
 * @param title The title to display in the panel
 * @param children The children of this component
 * @see {@link DetailsPanelProps}
 */
const DetailsPanel: Function = ({ title, children }: DetailsPanelProps) =>
  <DetailsPanelWrapper>
    <DetailsPanelTitle>{title}</DetailsPanelTitle>
    {children}
  </DetailsPanelWrapper>

export default DetailsPanel;
