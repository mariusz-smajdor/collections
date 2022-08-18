import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15%;
  background: ${({ theme }) => theme.color.background.secondary};
  box-shadow: 0px 5px 15px 5px ${({ theme }) => theme.color.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    padding: 20px 12%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.big}px) {
    padding: 20px 9%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 20px 6%;
  }
`;

export const Group = styled.div`
  display: flex;
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 10px;
  background: ${({ theme }) => theme.color.background.tertiary};
  color: ${({ theme }) => theme.color.text.secondary};
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  border-right: unset;
  border-radius: 5px 0 0 5px;
`;

export const SearchField = styled.input`
  padding: 10px 15px;
  background: ${({ theme }) => theme.color.background.tertiary};
  color: ${({ theme }) => theme.color.text.primary};
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  border-left: unset;
  border-radius: 0 5px 5px 0;
  outline: unset;

  &::placeholder {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const SearchIcon = styled(RiSearchLine)``;
