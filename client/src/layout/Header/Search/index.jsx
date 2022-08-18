import { Group, SearchButton, SearchField, SearchIcon } from '../styled';

function Search() {
  return (
    <Group>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <SearchField placeholder='SEARCH COLLECTIONS' />
    </Group>
  );
}

export default Search;
