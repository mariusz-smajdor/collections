import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
  }
`;

export const Text = styled.span`
  flex-basis: 30%;
`;

export const Info = styled.p`
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
