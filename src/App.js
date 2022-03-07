import "./App.scss";
import { useState } from "react";
import { MODES } from "./utils/modes";
import Header from "./components/header";
import Footer from "./components/footer";
import Dashboard from "./pages/dashboard";

const App = () => {
	const [mode, setMode] = useState(MODES.DASHBOARD);
	const content = <Dashboard />;
	return (
		<div className="App">
			<Header />
			{content}
			<Footer screen={mode.screen} onClick={(m) => setMode(m)} />
		</div>
	);
};

export default App;
