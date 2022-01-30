import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { Button } from "../Button";
import { Icon } from "../Icon";
import { NavigationLink } from "../../types/NavigationLink";

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 32px;
  background-color: ${props => props.theme.colors.contrast};
`;

const NavBarLink = styled(Link)`
  text-decoration: none;
`;

/**
 * Renders a navigation bar
 */
const NavBar: Function = () => {
  const location: string = useLocation().pathname;

  const actions: NavigationLink[] = [
    {
      icon: 'k-icon-dashboard',
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: 'k-icon-card',
      label: 'Card',
      path: '/card',
    },
    {
      icon: 'k-icon-refresh',
      label: 'Refresh',
      path: '/',
    },
    {
      icon: 'k-icon-settings',
      label: 'Settings',
      path: '/settings',
    },
  ];

  return (
    <NavBarWrapper>
      {actions.map(action =>
        <NavBarLink
            key={action.label}
            to={action.path}
        >
          <Button
            kind={location === `/${action.label?.toLowerCase()}` ? 'primary' : 'secondary'}
            display={'icon'}
            label={action.label}
            icon={<Icon icon={action.icon} size={26}/>}
          />
        </NavBarLink>
      )}
    </NavBarWrapper>
  );
}

export default NavBar;
