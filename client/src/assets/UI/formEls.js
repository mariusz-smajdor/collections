import styled, { css } from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 0;
  } ;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
  }
`;

export const Text = styled.span`
  flex-basis: 30%;
`;

export const Input = styled(Field)`
  padding: 10px 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.text.secondary};
  border-radius: 5px;
  background: ${({ theme }) => theme.color.background.tertiary};
  color: ${({ theme }) => theme.color.text.primary};
  outline: unset;
  resize: none;

  &::file-selector-button {
    font-weight: bold;
    background: unset;
    color: ${({ theme }) => theme.color.accent.primary};
    border: unset;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.color.accent.primary};
  color: ${({ theme }) => theme.color.background.secondary};
  border: 2px solid ${({ theme }) => theme.color.accent.primary};
  border-radius: 20px;
  text-align: center;
  text-decoration: unset;
  font-weight: bold;
  transition: filter 0.3s;

  ${({ $outlined }) =>
    $outlined &&
    css`
      background: ${({ theme }) => theme.color.background.secondary};
      color: ${({ theme }) => theme.color.accent.primary};
      border: 2px solid ${({ theme }) => theme.color.accent.primary};
    `}

  ${({ $navBtn }) =>
    $navBtn &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
        display: none;
      }
    `}

    ${({ $mobileMenu }) =>
    $mobileMenu &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
        display: unset;
      }
    `}

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(130%);
  }
`;
