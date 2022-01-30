import { screen } from "@testing-library/react";
import React from "react";

import { UnderConstruction } from "../../pages/UnderConstruction";
import { themedRender } from "../helpers/themedRender";

test('renders its elements', () => {
  themedRender(<UnderConstruction title={'Test title'} />);
  const pageTitle = screen.getByText(/Test title/i);
  const detailsTitle = screen.getByText(/This page is currently under construction/i);
  const image = screen.getByAltText(/Under construction/i);
  expect(pageTitle).toBeInTheDocument();
  expect(detailsTitle).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
