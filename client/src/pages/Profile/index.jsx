import { Link } from 'react-router-dom';

import Container from '../../components/layout/Container';
import { useAuth } from '../../shared/hooks/useAuth';
import { routes } from '../../shared/constants/routes';
import { Button } from '../../assets/UI/formEls';
import { Title } from '../../assets/UI/textFormatEls';
import { Group } from './styled';

const { NEW_COLLECTION } = routes;

function Profile() {
  const user = useAuth();

  return (
    <Container medium>
      <Title>Hello, {user.username}</Title>
      <Group>
        <Title as='h3' subtitle>
          You Have No Collections.
        </Title>
        <Button as={Link} to={NEW_COLLECTION}>
          Add New
        </Button>
      </Group>
    </Container>
  );
}

export default Profile;
