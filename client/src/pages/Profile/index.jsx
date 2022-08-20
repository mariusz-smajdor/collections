import { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { getLocalStorageItem } from '../../shared/utils/getLocalStorageItem';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';
import { Button, Title } from '../../assets/UI';
import { Group } from './styled';

const { TOKEN } = localStorageKeys;

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
        <Button>Add New</Button>
      </Group>
    </Container>
  );
}

export default Profile;
