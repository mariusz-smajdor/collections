import { Formik } from 'formik';

import { Label, Form, Input, Button } from '../../../assets/UI/formEls';
import { Title } from '../../../assets/UI/textFormatEls';

function NewField() {
  return (
    <Formik>
      <Form>
        <Title as='h3'>Add New Field</Title>
        <Label>
          <Input placeholder='Field name' />
          <Input placeholder='Field type' />
        </Label>
        <Button>Add New Field</Button>
      </Form>
    </Formik>
  );
}

export default NewField;
