import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Container from '../../common/layout/Container';
import { useInputValue } from '../../shared/hooks/useInputValue';
import { userCredentials } from '../../shared/constants/userCredentials';
import { routes } from '../../shared/constants/routes';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';
import { Title, Input, Button } from '../../assets/UI';
import { Form, Label, Text, Info } from './styled';

const { INITIAL_VALUE } = userCredentials;
const { TOKEN } = localStorageKeys;
const { HOME } = routes;

function Login() {
  const [message, setMessage] = useState('');
  const { value: user, changeValue } = useInputValue(INITIAL_VALUE);

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3001/login', { user })
      .then(res => {
        localStorage.setItem(TOKEN, res.data.accessToken);
        navigate(HOME, { state: res.data });
        window.location.reload(false);
      })
      .catch(err => {
        setMessage(err.response.data);
      });
  }

  return (
    <Container>
      <Form onSubmit={login}>
        <Title>Sign In</Title>
        <Label>
          <Text>Username:</Text>
          <Input name='username' onChange={changeValue} required />
        </Label>
        <Label>
          <Text>Password:</Text>
          <Input
            type='password'
            name='password'
            onChange={changeValue}
            required
          />
        </Label>
        <Button>Submit</Button>
        <Info>{message}</Info>
      </Form>
    </Container>
  );
}

export default Login;
