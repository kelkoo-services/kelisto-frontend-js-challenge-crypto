import "./App.scss";
import { useState } from "react";
import { MODES } from "./utils/modes";
import Header from "./components/header";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";
import AnotherPage from "./pages/another-page";

const App = () => {
	const [mode, setMode] = useState(MODES.DASHBOARD);
	let content = <Dashboard />;
	if (mode.screen !== MODES.DASHBOARD.screen) {
		content = <AnotherPage title={mode.key} />;
	}

	return (
		<div className="App">
			<Header />
			{content}
			<Footer screen={mode.screen} onClick={(m) => setMode(m)} />
		</div>
	);
};

export default App;
