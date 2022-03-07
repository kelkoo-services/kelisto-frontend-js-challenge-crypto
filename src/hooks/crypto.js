import { useState } from "react";
import dataJson from "../data/response.json";

const CryptoHook = () => {
	const [cryptoData, setCryptoData] = useState(null);

	if (!cryptoData) {
		setCryptoData(dataJson);
	}
	return [cryptoData, setCryptoData];
};

export default CryptoHook;
