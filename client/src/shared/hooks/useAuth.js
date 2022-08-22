import { useEffect, useState } from 'react';
import axios from 'axios';

import { getLocalStorageItem } from '../utils/getLocalStorageItem';
import { localStorageKeys } from '../constants/localStorageKeys';

const { TOKEN } = localStorageKeys;

export function useAuth() {
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

  return user;
}
