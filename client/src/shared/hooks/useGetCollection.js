import { useState, useEffect } from 'react';
import axios from 'axios';

import { localStorageKeys } from '../constants/localStorageKeys';
import { getLocalStorageItem } from '../utils/getLocalStorageItem';

const { TOKEN } = localStorageKeys;

export function useGetCollection() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3001/collection', {
        headers: {
          authorization: getLocalStorageItem(TOKEN),
        },
      })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return data;
}
