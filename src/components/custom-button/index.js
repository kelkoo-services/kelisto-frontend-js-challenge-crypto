import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const CustomButton = ({ active, className, mode, onClick }) => {
	const { t } = useTranslation();

	return (
		<div
			className={classNames(className, { active: active })}
			onClick={() => onClick(mode)}
			title={t(`modes.${mode.screen}`)}
		>
			<i class={`k-icon-${mode.screen}`}></i>
		</div>
	);
};

export default CustomButton;
