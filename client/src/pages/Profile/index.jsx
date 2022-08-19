import Container from '../../components/layout/Container';
import { Button, Title } from '../../assets/UI';
import { Group } from './styled';

function Profile() {
  return (
    <Container medium>
      <Title>Hello, User</Title>
      <Group>
        <Title as='h3' subtitle>
          You Have No Collections.
        </Title>
        <Button>Add New</Button>
      </Group>
    </Container>
  );
}

export default Profile;
