import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.big}px) {
    flex-direction: column;
  }
`;

export const Subject = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: 1.1rem;
`;
