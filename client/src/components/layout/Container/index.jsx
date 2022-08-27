import { OuterContainer, InnerContainer } from './styled';

function Container({ children, medium, big }) {
  return (
    <OuterContainer>
      <InnerContainer medium={medium} big={big}>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}

export default Container;
