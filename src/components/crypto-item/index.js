import React from "react";
import "./crypto-item.scss";
import classNames from "classnames";
import { formatCoin } from "../../utils";

const CryptoItem = ({ data }) => {
	const getColor = () => {
		let color = "green";
		if (data.variant < 0) {
			color = "red";
		}
		return color;
	};

	return (
		<div key={data.id} className="item" data-testid="crypto-item">
			<span className="circle"></span>
			<div className="crypto-data">
				<div>
					<span className="name">{data.name}</span>
					<span className="value">{formatCoin(data.stock)}</span>
				</div>
				<div>
					<span className="short-name">{data.sku}</span>
					<span className={classNames("variant", getColor())}>
						{data.variant}%
					</span>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
