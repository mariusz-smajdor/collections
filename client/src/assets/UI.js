import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.color.accent.primary};
  color: ${({ theme }) => theme.color.background.secondary};
  border: 2px solid ${({ theme }) => theme.color.accent.primary};
  border-radius: 20px;
  text-align: center;
  text-decoration: unset;
  font-weight: bold;
  transition: filter 0.3s;

  ${({ outlined }) =>
    outlined &&
    css`
      background: ${({ theme }) => theme.color.background.secondary};
      color: ${({ theme }) => theme.color.accent.primary};
      border: 2px solid ${({ theme }) => theme.color.accent.primary};
    `}

  ${({ navBtn }) =>
    navBtn &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
        display: none;
      }
    `}

    ${({ mobileMenu }) =>
    mobileMenu &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
        display: unset;
      }
    `}

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(130%);
  }
`;
