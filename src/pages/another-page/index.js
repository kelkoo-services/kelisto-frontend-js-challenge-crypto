import React from "react";
import { useTranslation } from "react-i18next";
import "./another-page.scss";

const AnotherPage = ({ title }) => {
	const { t } = useTranslation();
	return <div className="title">{t(`modes.${title}`)}</div>;
};

export default AnotherPage;
