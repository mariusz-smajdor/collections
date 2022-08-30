import { useForm } from 'react-hook-form';
import { Button, Form, Input, Label, Text } from '../../../assets/UI/formEls';

function ItemForm({ itemFields }) {
  const { handleSubmit, register } = useForm();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {itemFields.map((field, i) => (
        <Label key={field[0]}>
          <Text>{field[0]}</Text>
          {field[1] === 'Textarea' ? (
            <Input as='textarea' {...register(field[0])} />
          ) : (
            <Input {...register(field[0])} type={field[1].toLowerCase()} />
          )}
        </Label>
      ))}
      <Button>Add Item</Button>
    </Form>
  );
}

export default ItemForm;
