import { useForm } from 'react-hook-form';

import Container from '../../components/layout/Container';
import { useSignUser } from '../../shared/hooks/useSignUser';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title, Message } from '../../assets/UI/textFormatEls';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { message, msgStatus, register: registerUser } = useSignUser();

  return (
    <Container>
      <Form onSubmit={handleSubmit(user => registerUser(user))}>
        <Title>Sign Up</Title>
        <Label>
          <Text>Username:</Text>
          <Input
            {...register('username', { required: 'Username is required' })}
          />
        </Label>
        {errors.username?.message && (
          <Message>{errors.username?.message}</Message>
        )}
        <Label>
          <Text>Password:</Text>
          <Input
            type='password'
            {...register('password', {
              required: 'Password is required',
            })}
          />
        </Label>
        {errors.password?.message && (
          <Message>{errors.password?.message}</Message>
        )}
        <Button>Submit</Button>
        {message && (
          <Message success={msgStatus === 'Created'}>{message}</Message>
        )}
      </Form>
    </Container>
  );
}

export default Register;
