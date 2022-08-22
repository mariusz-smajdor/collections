import { Formik } from 'formik';

import Container from '../../components/layout/Container';
import { useRequests } from '../../shared/hooks/useRequests';
import { initInputValues } from '../../shared/constants/initInputValues';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

const { CREDENTIALS } = initInputValues;

function Login() {
  const { message, login } = useRequests();

  function loginHandler(user, resetForm) {
    login(user);
    resetForm({ values: '' });
  }

  return (
    <Container>
      <Formik
        initialValues={CREDENTIALS}
        onSubmit={(values, { resetForm }) => loginHandler(values, resetForm)}
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
