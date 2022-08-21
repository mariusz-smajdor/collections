import { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { initInputValues } from '../../shared/constants/initInputValues';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

const { CREDENTIALS } = initInputValues;

function Register() {
  const [message, setMessage] = useState('');
  const [msgStatus, setMsgStatus] = useState('');

  function register(user, resetForm) {
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

    resetForm({ values: '' });
  }

  return (
    <Container>
      <Formik
        initialValues={CREDENTIALS}
        onSubmit={(values, { resetForm }) => register(values, resetForm)}
      >
        {() => (
          <Form onSubmit={register}>
            <Title>Sign Up</Title>
            <Label>
              <Text>Username:</Text>
              <Input name='username' required />
            </Label>
            <Label>
              <Text>Password:</Text>
              <Input type='password' name='password' required />
            </Label>
            <Button>Submit</Button>
            <Message success={msgStatus === 'Created'}>{message}</Message>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Register;
