import React, { useState } from "react";
import CryptoItem from "../../components/crypto-item";
import CryptoHook from "../../hooks/crypto";
import Spinner from "../../components/spinner";
import "./dashboard.scss";
import { useTranslation } from "react-i18next";
import { formatCoin } from "../../utils";

const Dashboard = () => {
	const [cryptoData] = CryptoHook();
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();

	const totalValue = cryptoData?.reduce((prev, curr) => {
		return prev + curr.stock;
	}, 0);

	const doNothing = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<div className="dashboard">
			{cryptoData ? (
				<>
					<div className="head">
						<div className="title">{t("your_balance")}</div>
						<div className="value" data-testid="total-value">
							{formatCoin(totalValue)}
						</div>
					</div>
					<div className="content">
						<div className="title">{t("recent")}</div>
						{cryptoData?.map((c) => (
							<CryptoItem data={c} />
						))}

						<div className="transaction-container">
							<button
								class="btn"
								type="button"
								disabled={loading}
								onClick={() => doNothing()}
							>
								{loading ? (
									<>
										<span
											class="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										></span>
										Loading...
									</>
								) : (
									t("show_transactions")
								)}
							</button>
						</div>
					</div>
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Dashboard;
