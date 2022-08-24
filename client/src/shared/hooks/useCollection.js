import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getLocalStorageItem } from '../utils/getLocalStorageItem';
import { localStorageKeys } from '../constants/localStorageKeys';
import { routes } from '../constants/routes';

const { PROFILE } = routes;
const { TOKEN } = localStorageKeys;

export function useCollection() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
      .then(navigate(`/${PROFILE}`))
      .catch(err => {
        setMessage(err.response.data);
        err.response.status === 403 && localStorage.removeItem('token');
      });
  }

  return { message, sendCollection };
}
