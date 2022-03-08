import "./footer.scss";
import { MODES } from "../../utils/modes";
import CustomButton from "../custom-button";

const Footer = ({ screen, onClick }) => {
	return (
		<div className="footer" data-testid="footer                        ">
			<div className="row">
				{Object.keys(MODES).map((key) => {
					const mode = MODES[key];
					const isActive = mode.screen === screen;
					return (
						<div className="col" key={mode.screen}>
							<CustomButton
								active={isActive}
								className="footer-button"
								mode={mode}
								onClick={onClick}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
