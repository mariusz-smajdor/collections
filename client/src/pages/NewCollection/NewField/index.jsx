import { Label, Form, Input, Button } from '../../../assets/UI/formEls';
import { Title } from '../../../assets/UI/textFormatEls';

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
