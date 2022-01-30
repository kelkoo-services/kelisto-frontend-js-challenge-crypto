import React from "react";
import styled from "styled-components";

import Button from "./Button";
import Icon from "./Icon";

const ToolBarWrapper = styled.div`
  font-size: ${props => props.theme.fontSizes.text3};
  text-align: center;
  color: ${props => props.theme.colors.contrast};
  background-color: ${props => props.theme.colors.primary};
  padding: 20px;
  height: 20px;
`;

const BellWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

/**
 * Renders the top bar
 */
const TopBar: Function = () => {
  return (
    <ToolBarWrapper>
      Hi Anakin
      <BellWrapper>
        <Button label={'Bell'} display={'icon'} icon={<Icon icon={'k-icon-bell'} size={24} />} />
      </BellWrapper>
    </ToolBarWrapper>
  );
}

export default TopBar;
