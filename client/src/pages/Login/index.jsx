import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { useInputValue } from '../../shared/hooks/useInputValue';
import { userCredentials } from '../../shared/constants/userCredentials';
import { routes } from '../../shared/constants/routes';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

const { INITIAL_VALUE } = userCredentials;
const { TOKEN } = localStorageKeys;
const { PROFILE } = routes;

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
        navigate(`/${PROFILE}`);
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
        <Message>{message}messag 1</Message>
      </Form>
    </Container>
  );
}

export default Login;
