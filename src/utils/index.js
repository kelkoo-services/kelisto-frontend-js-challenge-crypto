import currencyFormatter from "currency-formatter";

export const formatCoin = (value) =>
	currencyFormatter.format(value, { code: "USD" });
