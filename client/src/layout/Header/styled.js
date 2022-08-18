import styled, { css } from 'styled-components';
import { RiSearchLine, RiUserSettingsLine, RiSunLine } from 'react-icons/ri';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 15%;
  background: ${({ theme }) => theme.color.background.secondary};
  box-shadow: 0px 5px 15px 5px ${({ theme }) => theme.color.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    padding: 20px 10%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.big}px) {
    padding: 20px 5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 20px 20px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    gap: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    gap: 20px;
  }

  ${({ searchGroup }) =>
    searchGroup &&
    css`
      align-items: unset;
      gap: unset;

      @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
        gap: unset;
      }
    `}

  ${({ mobileMenu }) =>
    mobileMenu &&
    css`
      position: absolute;
      top: 100px;
      right: 20px;
      flex-direction: column;
      padding: 30px 15px;
      background: ${({ theme }) => theme.color.background.secondary};
      box-shadow: 0px 5px 15px 5px
        ${({ theme }) => theme.color.background.primary};
      border-radius: 20px;
    `}
`;

export const SearchIcon = styled(RiSearchLine)`
  transition: filter 0.3s;
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 10px;
  background: ${({ theme }) => theme.color.background.tertiary};
  color: ${({ theme }) => theme.color.text.secondary};
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  border-right: unset;
  border-radius: 5px 0 0 5px;
  cursor: pointer;

  &:hover {
    ${SearchIcon} {
      filter: brightness(120%);
    }
  }

  &:active {
    ${SearchIcon} {
      filter: brightness(140%);
    }
  }
`;

export const SearchField = styled.input`
  padding: 10px 15px;
  width: 100%;
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

export const UserSettingsIcon = styled(RiUserSettingsLine)`
  display: none;
  color: ${({ theme }) => theme.color.accent.primary};
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: unset;
  }

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(130%);
  }
`;

export const SunIcon = styled(RiSunLine)`
  color: ${({ theme }) => theme.color.accent.primary};
  font-size: 2rem;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(130%);
  }
`;
