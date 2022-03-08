import { render, screen } from "@testing-library/react";
import App from "./App";

test("render header and footer", () => {
	render(<App />);
	const header = screen.getByTestId("header");
	expect(header).toBeInTheDocument();
	const footer = screen.getByTestId("footer");
	expect(footer).toBeInTheDocument();
});
