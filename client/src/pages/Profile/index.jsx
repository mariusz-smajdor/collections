import { Link } from 'react-router-dom';

import Container from '../../components/layout/Container';
import { useGetCollection } from '../../shared/hooks/useGetCollection';
import { routes } from '../../shared/constants/routes';
import { Button } from '../../assets/UI/formEls';
import { Title } from '../../assets/UI/textFormatEls';
import { Collection, Collections, Group, Text } from './styled';

const { NEW_COLLECTION } = routes;

function Profile() {
  const { user, data: collections } = useGetCollection();

  return (
    <Container medium>
      <Title>Hello, {user}</Title>
      <Group>
        <Title as='h3' subtitle>
          {collections ? 'Your Collections:' : 'You Have No Collections.'}
        </Title>
        <Button as={Link} to={NEW_COLLECTION}>
          Add New
        </Button>
      </Group>
    </Container>
  );
}

export default Profile;
