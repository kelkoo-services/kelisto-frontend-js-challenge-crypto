import React from "react";
import { useTranslation } from "react-i18next";
import "./spinner.scss";

const Spinner = () => {
	const { t } = useTranslation();
	return <div className="spinner">{t("loading")}</div>;
};

export default Spinner;
