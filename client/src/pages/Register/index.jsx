import { Formik } from 'formik';

import Container from '../../components/layout/Container';
import { useRequests } from '../../shared/hooks/useRequests';
import { initInputValues } from '../../shared/constants/initInputValues';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

const { CREDENTIALS } = initInputValues;

function Register() {
  const { message, msgStatus, register } = useRequests();

  function registerHandler(user, resetForm) {
    register(user);
    resetForm({ values: '' });
  }

  return (
    <Container>
      <Formik
        initialValues={CREDENTIALS}
        onSubmit={(values, { resetForm }) => registerHandler(values, resetForm)}
      >
        {() => (
          <Form>
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
