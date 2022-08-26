import styled, { css } from 'styled-components';

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 40px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Collections = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;
`;

export const Collection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.background.tertiary};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
  }

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.color.accent.primary};
  }
`;

export const Fields = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Field = styled.span`
  font-size: 1.1rem;
  gap: 20px;
`;

export const FieldTitle = styled.span`
  color: ${({ theme }) => theme.color.accent.primary};
`;

export const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: unset;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.actions.negative};
  transition: filter 0.3s;

  ${({ $settings }) =>
    $settings &&
    css`
      color: ${({ theme }) => theme.color.actions.neutral};
    `}

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`;
