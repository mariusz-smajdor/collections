import Search from './Search';
import Navigation from './Navigation';
import { Wrapper } from './styled';

function Header() {
  return (
    <Wrapper>
      <Search />
      <Navigation />
    </Wrapper>
  );
}

export default Header;
