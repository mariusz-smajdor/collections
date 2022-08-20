import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 0;
  } ;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
  } ;
`;

export const Text = styled.span`
  flex-basis: 50%;
`;
