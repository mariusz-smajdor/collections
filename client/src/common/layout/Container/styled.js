import styled from 'styled-components';

export const OuterContainer = styled.div`
  margin: 100px 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: auto;
  padding: 0 20px;
  max-width: ${({ theme }) => theme.breakpoint.small}px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.background.secondary};
  box-shadow: 0px 5px 15px 5px ${({ theme }) => theme.color.background.primary};
`;
