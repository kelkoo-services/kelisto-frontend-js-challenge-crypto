import React from 'react';
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import './App.css';
import MainTheme from "./assets/themes/MainTheme";
import TopBar from "./components/TopBar/TopBar";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import NavBar from "./components/NavBar/NavBar";
import Routes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <HashRouter>
        <AppWrapper>
          <TopBar />
          <Routes />
          <NavBar />
        </AppWrapper>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
