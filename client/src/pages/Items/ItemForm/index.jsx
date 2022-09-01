import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Label, Text } from '../../../assets/UI/formEls';
import { Message, Title } from '../../../assets/UI/textFormatEls';
import { useSendItem } from '../../../shared/hooks/useSendItem';

function ItemForm({ items, id }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { sendItem } = useSendItem();

  function onSubmit(values) {
    sendItem(id, JSON.stringify(values));
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Add New Item</Title>
      <Label>
        <Text>Name:</Text>
        <Input
          {...register('name', { required: 'This field must not be empty.' })}
        />
      </Label>
      {errors?.name?.message && <Message>{errors.name.message}</Message>}
      <Label>
        <Text>Tags:</Text>
        <Input
          {...register('tags', { required: 'This field must not be empty.' })}
        />
      </Label>
      {errors?.tags?.message && <Message>{errors.tags.message}</Message>}
      {items?.map((field, i) => (
        <Fragment key={i}>
          <Label>
            <Text>{field.item}:</Text>
            <Input
              {...register(field.item, {
                required: 'This field must not be empty.',
              })}
              {...(field.options && JSON.parse(field.options))}
            />
          </Label>
          {!!errors?.[field.item]?.message && (
            <Message>{errors?.[field.item]?.message}</Message>
          )}
        </Fragment>
      ))}
      <Button type='submit'>Add Item</Button>
    </Form>
  );
}

export default ItemForm;
