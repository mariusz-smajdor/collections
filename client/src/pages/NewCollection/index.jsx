import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NewField from './NewField';
import Container from '../../components/layout/Container';
import { addCollection } from '../../services/collectionsSlice';
import { routes } from '../../shared/constants/routes';
import { useCollection } from '../../shared/hooks/useCollection';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Message, Title } from '../../assets/UI/textFormatEls';
import { TOPICS } from './constants';

const { PROFILE } = routes;

function NewCollection() {
  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { message, sendCollection } = useCollection();

  function submitCollection(fields) {
    const collection = {
      ...fields,
      items: JSON.stringify(fields.items),
    };

    sendCollection(collection);
    navigate(`/${PROFILE}`);
  }

  return (
    <Container medium>
      <Form onSubmit={handleSubmit(submitCollection)}>
        <Title>Create Collection</Title>
        <Label>
          <Text>Name:</Text>
          <Input
            {...register('name', { required: 'This field must not be empty.' })}
          />
        </Label>
        {errors.name?.message && <Message>{errors.name?.message}</Message>}
        <Label>
          <Text>Description:</Text>
          <Input
            {...register('description', {
              required: 'This field must not be empty.',
            })}
          />
        </Label>
        {errors.description?.message && (
          <Message>{errors.description?.message}</Message>
        )}
        <Label>
          <Text>Topic:</Text>
          <Input
            as='select'
            {...register('topic', {
              required: 'This field must not be empty.',
            })}
          >
            {TOPICS.map(topic => (
              <option key={topic}>{topic}</option>
            ))}
          </Input>
        </Label>
        <Button type='submit'>Create</Button>
        <Message>{message}</Message>
      </Form>
      <NewField
        register={register}
        control={control}
        watch={watch}
        errors={errors}
      />
    </Container>
  );
}

export default NewCollection;
