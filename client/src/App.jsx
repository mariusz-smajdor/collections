import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/layout/Header';
import AppRoutes from './components/Routes/AppRoutes';
import { GlobalStyle } from './assets/GlobalStyle';
import { lightTheme, darkTheme } from './assets/theme';

function App() {
  const theme = useSelector(state => state.themeToggler.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
