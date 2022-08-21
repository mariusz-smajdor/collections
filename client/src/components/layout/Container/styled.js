import styled, { css } from 'styled-components';

export const OuterContainer = styled.div`
  margin: 100px 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 50px 30px;
  max-width: ${({ theme }) => theme.breakpoint.small}px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 5px ${({ theme }) => theme.color.background.primary};
  background: ${({ theme }) => theme.color.background.secondary};

  ${({ medium }) =>
    medium &&
    css`
      max-width: ${({ theme }) => theme.breakpoint.medium}px;
    `}
`;
