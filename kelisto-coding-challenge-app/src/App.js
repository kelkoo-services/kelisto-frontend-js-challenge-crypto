import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/theme/kelistoTheme';
import DashboardView from './component/dashboard/DashboardView';


function App() {
  return (
    <>
      <ThemeProvider  theme={theme}>
        <DashboardView/>
      </ThemeProvider>
    </>
  );
}

export default App;
