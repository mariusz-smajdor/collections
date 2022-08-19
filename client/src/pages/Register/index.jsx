import Container from '../../common/layout/Container';

import { Title, Input, Button } from '../../assets/UI';
import { Form, Label, Text, Info } from './styled';

function Register() {
  return (
    <Container>
      <Form>
        <Title>Sign Up</Title>
        <Label>
          <Text>Username:</Text>
          <Input name='username' />
        </Label>
        <Label>
          <Text>Password:</Text>
          <Input type='password' name='password' />
        </Label>
        <Button>Submit</Button>
        <Info></Info>
      </Form>
    </Container>
  );
}

export default Register;
