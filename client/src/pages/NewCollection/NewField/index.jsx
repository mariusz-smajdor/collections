import { Title, Input, Button } from '../../../assets/UI';
import { Label, Form } from '../styled';

function NewField() {
  return (
    <Form as='div'>
      <Title as='h3'>Add New Field</Title>
      <Label>
        <Input placeholder='Field name' />
        <Input placeholder='Field type' />
      </Label>
      <Button>Add New Field</Button>
    </Form>
  );
}

export default NewField;
