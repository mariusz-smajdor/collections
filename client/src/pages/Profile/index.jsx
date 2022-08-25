import { Link } from 'react-router-dom';
import { RiDeleteBinLine, RiSettings3Line } from 'react-icons/ri';

import Container from '../../components/layout/Container';
import { useGetCollection } from '../../shared/hooks/useGetCollection';
import { routes } from '../../shared/constants/routes';
import { Button } from '../../assets/UI/formEls';
import { Title } from '../../assets/UI/textFormatEls';
import {
  Collection,
  Collections,
  Group,
  Fields,
  Field,
  FieldTitle,
  Settings,
  Icon,
} from './styled';

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
      {collections?.map(({ name, description, topic }, i) => (
        <Collections key={i}>
          <Collection>
            <Fields>
              <Field>
                <FieldTitle>Name: </FieldTitle>
                {name}
              </Field>
              <Field>
                <FieldTitle>Topic: </FieldTitle>
                {topic}
              </Field>
              <Field>
                <FieldTitle>Description: </FieldTitle>
                {description}
              </Field>
            </Fields>
            <Settings>
              <Icon as={RiSettings3Line} settings />
              <Icon as={RiDeleteBinLine} />
            </Settings>
          </Collection>
        </Collections>
      ))}
    </Container>
  );
}

export default Profile;
