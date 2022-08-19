import { OuterContainer, InnerContainer } from './styled';

function Container({ children, medium }) {
  return (
    <OuterContainer>
      <InnerContainer medium={medium}>{children}</InnerContainer>
    </OuterContainer>
  );
}

export default Container;
