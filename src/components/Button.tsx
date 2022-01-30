import React from "react";
import styled, {DefaultTheme, useTheme} from "styled-components";

import { kindToColor, kindToTextColor } from "../utils/colorMapper";

/**
 * Props for the {@link Button} component
 */
interface ButtonProps {
  kind?: 'primary' | 'secondary';
  display?: 'text' | 'icon' | 'both';
  label?: string;
  icon?: React.ReactNode;
  onClick: () => {};
}

/**
 * Props for the styled-component that wraps the button
 */
interface ButtonWrapperProps {
  color?: string;
  textColor?: string;
  iconOnly?: boolean;
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: ${props => props.iconOnly ? '64px' : '100%'};
  color: ${props => props.textColor ?? props.theme.colors.contrast};
  background-color: ${props => props.color ?? props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.border1};
  cursor: pointer;
`;

const ButtonLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.text3};
`;

/**
 * Renders a custom button
 * @param kind The type of button
 * @param display How to display the provided info
 * @param label The text to display
 * @param icon The icon to display
 * @param onClick The callback function for the click event
 * @see {@link ButtonProps}
 */
const Button: Function = ({ kind, display, label, icon, onClick }: ButtonProps) => {
  const theme: DefaultTheme = useTheme();

  return (
    <ButtonWrapper
      aria-label={label}
      color={kindToColor(theme, kind)}
      textColor={kindToTextColor(theme, kind)}
      iconOnly={display === "icon"}
      onClick={onClick}
    >
      {label && display !== 'icon' && <ButtonLabel>{label}</ButtonLabel>}
      {icon && display !== 'text' && icon}
    </ButtonWrapper>
  );
}

export default Button;
