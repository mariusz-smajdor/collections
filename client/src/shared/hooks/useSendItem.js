import { useState } from 'react';
import axios from 'axios';

import { getLocalStorageItem } from '../utils/getLocalStorageItem';
import { localStorageKeys } from '../constants/localStorageKeys';

const { TOKEN } = localStorageKeys;

export function useSendItem() {
  const [message, setMessage] = useState('');

  function sendItem(id, item) {
    console.log(id, item);
    axios
      .post(
        'http://localhost:3001/item',
        { id, item },
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

  return { message, sendItem };
}
