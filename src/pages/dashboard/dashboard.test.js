/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import Dashboard from "./index";
import data from "../../data/response.json";
import { formatCoin } from "../../utils";

test("render list", () => {
	render(<Dashboard />);
	const cryptoItemsInComponent = screen.getAllByTestId("crypto-item").length;
	const cryptoItemsInData = data.length;
	expect(cryptoItemsInComponent).toEqual(cryptoItemsInData);
});

test("render correct total value", () => {
	render(<Dashboard />);
	const totalValue = data.reduce((prev, curr) => {
		return prev + curr.stock;
	}, 0);

	const formattedValue = formatCoin(totalValue);
	expect(screen.getByTestId("total-value").textContent).toEqual(formattedValue);
});
