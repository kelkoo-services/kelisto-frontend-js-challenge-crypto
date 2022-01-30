import { screen } from "@testing-library/react";
import React from "react";

import { TopBar } from "../../components/TopBar";
import { themedRender } from "../helpers/themedRender";

test('renders its elements', () => {
  themedRender(<TopBar />);
  const title = screen.getByText(/Hi Anakin/i);
  const button = screen.getByRole('button', { name: /Bell/i });
  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
