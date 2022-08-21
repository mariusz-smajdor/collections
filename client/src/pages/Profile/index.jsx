import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { getLocalStorageItem } from '../../shared/utils/getLocalStorageItem';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';
import { routes } from '../../shared/constants/routes';
import { Button } from '../../assets/UI/formEls';
import { Title } from '../../assets/UI/textFormatEls';
import { Group } from './styled';

const { TOKEN } = localStorageKeys;
const { NEW_COLLECTION } = routes;

function Profile() {
  const [user, setUser] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/myself', {
        headers: {
          authorization: getLocalStorageItem(TOKEN),
        },
      })
      .then(res => {
        setUser(res.data[0]);
      })
      .catch(err => {
        err.response.status === 403 && localStorage.removeItem('token');
      });
  }, []);

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
