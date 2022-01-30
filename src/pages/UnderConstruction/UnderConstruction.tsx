import React from "react";
import styled from "styled-components";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import DetailsPanel from "../../components/DetailsPanel/DetailsPanel";

/**
 * Props for the {@link UnderConstruction} component
 */
interface UnderConstructionProps {
  title: string;
}

const Title = styled.div`
  text-align: center;
  padding: 23px 0 32px;
  color: ${props => props.theme.colors.contrast};
  font-size: ${props => props.theme.fontSizes.text1};
`

const UnderConstructionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

/**
 * Renders a page without content
 * @param title The title to display
 * @see {@link UnderConstructionProps}
 */
const UnderConstruction: Function = ({ title }: UnderConstructionProps) =>
  <PageWrapper>
    <Title>{title}</Title>
    <DetailsPanel
        title={'This page is currently under construction'}
    >
      <UnderConstructionDetailsWrapper>
        <img
          alt='Under construction'
          src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/128/000000/external-under-construction-construction-dreamstale-lineal-dreamstale.png'/>
      </UnderConstructionDetailsWrapper>
    </DetailsPanel>
  </PageWrapper>

export default UnderConstruction;
