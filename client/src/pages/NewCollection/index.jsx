import { Formik } from 'formik';

import NewField from './NewField';
import Container from '../../components/layout/Container';
import { TOPICS } from './topics';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Title } from '../../assets/UI/textFormatEls';

function NewCollection() {
  return (
    <Container medium>
      <Formik>
        {() => (
          <Form>
            <Title>Create Collection</Title>
            <Label>
              <Text>Name:</Text>
              <Input />
            </Label>
            <Label>
              <Text>Description:</Text>
              <Input />
            </Label>
            <Label>
              <Text>Topic:</Text>
              <Input as='select'>
                {TOPICS.map((topic, i) => (
                  <option key={i}>{topic}</option>
                ))}
              </Input>
            </Label>
            <Label>
              <Text>Add image:</Text>
              <Input type='file' accept='.jpg,.jpeg,.png' />
            </Label>
            <Button>Create</Button>
          </Form>
        )}
      </Formik>
      <NewField />
    </Container>
  );
}

export default NewCollection;
