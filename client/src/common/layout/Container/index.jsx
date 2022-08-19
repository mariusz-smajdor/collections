import { OuterContainer, InnerContainer } from './styled';

function Container({ children }) {
  return (
    <OuterContainer>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}

export default Container;
