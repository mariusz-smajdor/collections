import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin2Line, RiSettings3Line } from 'react-icons/ri';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { removeCollection } from '../../services/collectionsSlice';
import { useGetCollections } from '../../shared/hooks/useGetCollections';
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
  const { collections } = useSelector(state => state.collections);
  const dispatch = useDispatch();
  useGetCollections();

  function deleteCollection(id) {
    axios.delete(`http://localhost:3001/collection/${id}`);
    dispatch(removeCollection(id));
  }

  return (
    <Container medium>
      <Title>Hello, {collections?.user}</Title>
      <Group>
        <Title as='h3' subtitle>
          {collections ? 'Your Collections:' : 'You Have No Collections.'}
        </Title>
        <Button as={Link} to={NEW_COLLECTION}>
          Add New
        </Button>
      </Group>
      {collections?.data?.map(({ id, name, description, topic }) => (
        <Collections key={id}>
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
              <Link to={`item/${name}`}>
                <Icon as={RiSettings3Line} $settings />
              </Link>
              <Icon
                as={RiDeleteBin2Line}
                onClick={() => deleteCollection(id)}
              />
            </Settings>
          </Collection>
        </Collections>
      ))}
    </Container>
  );
}

export default Profile;
