import { screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import NavBar from "../../components/NavBar";
import { themedRender } from "../helpers/themedRender";
import MainTheme from "../../assets/themes/MainTheme";

test('renders its elements', () => {
  themedRender(<MemoryRouter initialEntries={[{ pathname: '/dashboard' }]}><NavBar /></MemoryRouter>);
  const dashboardButton = screen.getByRole('button', { name: /Dashboard/i });
  const cardButton = screen.getByRole('button', { name: /Card/i });
  const refreshButton = screen.getByRole('button', { name: /Refresh/i });
  const settingsButton = screen.getByRole('button', { name: /Settings/i });
  expect(screen.getAllByRole('button').length).toBe(4);
  expect(dashboardButton).toBeInTheDocument();
  expect(cardButton).toBeInTheDocument();
  expect(refreshButton).toBeInTheDocument();
  expect(settingsButton).toBeInTheDocument();
});

test('highlights the current page', () => {
  themedRender(<MemoryRouter initialEntries={[{ pathname: '/dashboard' }]}><NavBar /></MemoryRouter>);
  const dashboardButton = screen.getByRole('button', { name: /Dashboard/i });
  const cardButton = screen.getByRole('button', { name: /Card/i });
  const refreshButton = screen.getByRole('button', { name: /Refresh/i });
  const settingsButton = screen.getByRole('button', { name: /Settings/i });
  expect(dashboardButton).toHaveAttribute('color', MainTheme.colors.primary);
  expect(cardButton).toHaveAttribute('color', MainTheme.colors.contrast);
  expect(refreshButton).toHaveAttribute('color', MainTheme.colors.contrast);
  expect(settingsButton).toHaveAttribute('color', MainTheme.colors.contrast);
});
