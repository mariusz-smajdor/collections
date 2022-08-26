import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { localStorageKeys } from '../constants/localStorageKeys';
import { getLocalStorageItem } from '../utils/getLocalStorageItem';
import { setCollections } from '../../services/collectionsSlice';

const { TOKEN } = localStorageKeys;

export function useGetCollections() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3001/collection', {
        headers: {
          authorization: getLocalStorageItem(TOKEN),
        },
      })
      .then(res => {
        dispatch(setCollections(res.data));
      })
      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem('token');
        }
      });
  }, [dispatch]);
}
