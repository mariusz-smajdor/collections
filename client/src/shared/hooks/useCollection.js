import { useState } from 'react';
import axios from 'axios';

import { getLocalStorageItem } from '../utils/getLocalStorageItem';
import { localStorageKeys } from '../constants/localStorageKeys';

const { TOKEN } = localStorageKeys;

export function useCollection() {
  const [message, setMessage] = useState('');

  function sendCollection(collection) {
    axios
      .post(
        'http://localhost:3001/collection',
        { collection },
        {
          headers: {
            authorization: getLocalStorageItem(TOKEN),
          },
        }
      )
      .catch(err => {
        setMessage(err.response.data);
        err.response.status === 403 && localStorage.removeItem('token');
      });
  }

  return { message, sendCollection };
}
