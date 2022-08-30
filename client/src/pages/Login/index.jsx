import { useForm } from 'react-hook-form';

import Container from '../../components/layout/Container';
import { useSignUser } from '../../shared/hooks/useSignUser';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { message, login } = useSignUser();

  return (
    <Container>
      <Form onSubmit={handleSubmit(user => login(user))}>
        <Title>Sign In</Title>
        <Label>
          <Text>Username:</Text>
          <Input
            {...register('username', { required: 'Username is required.' })}
            type='text'
          />
        </Label>
        {errors.username?.message && (
          <Message>{errors.username?.message}</Message>
        )}
        <Label>
          <Text>Password:</Text>
          <Input
            {...register('password', { required: 'Password is required.' })}
            type='password'
          />
        </Label>
        {errors.password?.message && (
          <Message>{errors.password?.message}</Message>
        )}
        <Button type='submit'>Submit</Button>
        {message && <Message>{message}</Message>}
      </Form>
    </Container>
  );
}

export default Login;
