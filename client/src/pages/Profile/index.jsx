import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin2Line, RiSettings3Line } from 'react-icons/ri';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { useGetCollections } from '../../shared/hooks/useGetCollections';
import { removeCollection } from '../../services/collectionsSlice';
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

const { NEW_COLLECTION, ITEMS } = routes;

function Profile() {
  const { collections } = useSelector(state => state.collections);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useGetCollections();

  function deleteCollection(id) {
    axios.delete(`http://localhost:3001/collection/${id}`);
    dispatch(removeCollection(id));
  }

  function manageCollection(name) {
    navigate(ITEMS + name);
  }

  return (
    <Container medium>
      <Title>Hello, {collections?.user}</Title>
      <Group>
        <Title as='h3' subtitle>
          {collections?.data?.length
            ? 'Your Collections:'
            : 'You Have No Collections.'}
        </Title>
        <Button as={Link} to={NEW_COLLECTION}>
          Add New
        </Button>
      </Group>
      {collections?.data?.map(({ id, name, description, topic }) => (
        <Collections key={name}>
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
              <Icon
                as={RiSettings3Line}
                $settings
                onClick={() => manageCollection(name)}
              />
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
