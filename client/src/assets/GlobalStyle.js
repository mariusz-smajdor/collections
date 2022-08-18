import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.color.background.tertiary};
    color: ${({ theme }) => theme.color.text.primary};
    font-family: 'Poppins', sans-serif;
  }
`;
