import styled, { css } from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.accent.primary};
  text-align: center;

  ${({ subtitle }) =>
    subtitle &&
    css`
      color: ${({ theme }) => theme.color.text.primary};
    `}
`;

export const Message = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.actions.negative};
  text-align: center;
  font-weight: bold;

  ${({ success }) =>
    success &&
    css`
      color: ${({ theme }) => theme.color.actions.positive};
    `}
`;
