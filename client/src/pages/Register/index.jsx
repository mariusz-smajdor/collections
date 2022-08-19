import { useState } from 'react';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { useInputValue } from '../../shared/hooks/useInputValue';
import { userCredentials } from '../../shared/constants/userCredentials';
import { Title, Input, Button } from '../../assets/UI';
import { Form, Label, Text, Info } from './styled';

const { INITIAL_VALUE } = userCredentials;

function Register() {
  const [message, setMessage] = useState('');
  const [msgStatus, setMsgStatus] = useState('');
  const { value: user, changeValue } = useInputValue(INITIAL_VALUE);

  function register(e) {
    e.preventDefault();

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

  return (
    <Container>
      <Form onSubmit={register}>
        <Title>Sign Up</Title>
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
        <Info success={msgStatus === 'Created'}>{message}</Info>
      </Form>
    </Container>
  );
}

export default Register;
