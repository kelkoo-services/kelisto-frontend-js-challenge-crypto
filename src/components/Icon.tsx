import React from "react";
import styled from "styled-components";

/**
 * Props for the {@link Icon} component
 */
interface IconProps {
  icon: string;
  size?: number;
}

/**
 * Props for the styled-component that wraps the icon
 */
interface IconWrapperProps {
  size?: number;
}

const IconWrapper = styled.i<IconWrapperProps>`
  font-size: ${props => props.size ?? '16'}px;
`;

/**
 * Renders an icon from the CSS class name
 * @param icon The name of the icon class
 * @param size The size of the icon in pixels
 * @see {@link IconProps}
 */
const Icon: Function = ({ icon, size }: IconProps) => {
  return <IconWrapper className={icon} size={size} />
}

export default Icon;
