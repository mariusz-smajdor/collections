import { Group, SearchButton, SearchField, SearchIcon } from '../styled';

function Search() {
  return (
    <Group searchGroup>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <SearchField placeholder='SEARCH COLLECTIONS' />
    </Group>
  );
}

export default Search;
