import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/GlobalStyle';
import { theme } from './assets/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello, World!</h1>
    </ThemeProvider>
  );
}

export default App;
