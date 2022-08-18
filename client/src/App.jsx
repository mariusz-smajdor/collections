import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/GlobalStyle';
import { theme } from './assets/theme';

import Header from './layout/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
