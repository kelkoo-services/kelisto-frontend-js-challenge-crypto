/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import Footer from "./index";
import { MODES } from "../../utils/modes";

test("render footer with buttons but without active button", () => {
	const { container } = render(<Footer />);

	const totalModes = Object.keys(MODES).length;
	const buttons = container.getElementsByClassName("footer-button").length;
	expect(totalModes).toEqual(buttons);

	expect(
		Array.from(container.getElementsByClassName("footer-button")).every(
			(b) => !b.classList.contains("active")
		)
	).toBe(true);
});

test("render footer with active button", () => {
	const { container } = render(<Footer screen={MODES.DASHBOARD.screen} />);
	expect(
		container
			.getElementsByClassName("footer-button")[0]
			.classList.contains("active")
	).toBe(true);
});
