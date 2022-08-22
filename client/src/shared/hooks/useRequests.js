import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../shared/constants/routes';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';

const { TOKEN } = localStorageKeys;
const { PROFILE } = routes;

export function useRequests() {
  const [message, setMessage] = useState('');
  const [msgStatus, setMsgStatus] = useState('');

  const navigate = useNavigate();

  function register(user) {
    axios
      .post('http://localhost:3001/register', { user })
      .then(res => {
        setMessage(res.data);
        setMsgStatus(res.statusText);
      })
      .catch(err => {
        setMessage(err.response.data);
        setMsgStatus(err.response.statusText);
      });
  }

  function login(user) {
    axios
      .post('http://localhost:3001/login', { user })
      .then(res => {
        localStorage.setItem(TOKEN, res.data.accessToken);
        navigate(`/${PROFILE}`);
        window.location.reload(false);
      })
      .catch(err => {
        setMessage(err.response.data);
      });
  }

  return {
    message,
    msgStatus,
    register,
    login,
  };
}
