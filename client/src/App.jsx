import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Header from './layout/Header';
import { GlobalStyle } from './assets/GlobalStyle';
import { lightTheme, darkTheme } from './assets/theme';

function App() {
  const theme = useSelector(state => state.themeToggler.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
