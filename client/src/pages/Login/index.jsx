import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';

import Container from '../../components/layout/Container';
import { routes } from '../../shared/constants/routes';
import { localStorageKeys } from '../../shared/constants/localStorageKeys';
import { initInputValues } from '../../shared/constants/initInputValues';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

const { TOKEN } = localStorageKeys;
const { PROFILE } = routes;
const { CREDENTIALS } = initInputValues;

function Login() {
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  function login(user, resetForm) {
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

    resetForm({ values: '' });
  }

  return (
    <Container>
      <Formik
        initialValues={CREDENTIALS}
        onSubmit={(values, { resetForm }) => login(values, resetForm)}
      >
        {() => (
          <Form>
            <Title>Sign In</Title>
            <Label>
              <Text>Username:</Text>
              <Input name='username' required />
            </Label>
            <Label>
              <Text>Password:</Text>
              <Input name='password' type='password' required />
            </Label>
            <Button type='submit'>Submit</Button>
            <Message>{message}</Message>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
