import styled from 'styled-components';

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
