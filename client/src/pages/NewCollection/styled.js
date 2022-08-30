import styled from 'styled-components';
import { RiDeleteBack2Line } from 'react-icons/ri';

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Icon = styled(RiDeleteBack2Line)`
  color: ${({ theme }) => theme.color.actions.negative};
  font-size: 1.2rem;
  transition: filter, 0.3s;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(130%);
  }
`;
