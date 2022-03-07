import "./header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t } = useTranslation();

	return (
		<div className="header">
			<div className="content">
				{t("hi", { name: "Anakin" })}
				<i class="k-icon-bell"></i>
			</div>
		</div>
	);
};

export default Header;
