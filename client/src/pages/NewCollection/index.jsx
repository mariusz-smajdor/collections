import Container from '../../components/layout/Container';
import { TOPICS } from './topics';
import { Input, Title, Button } from '../../assets/UI';
import { Form, Label, Text } from './styled';

function NewCollection() {
  return (
    <Container medium>
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
    </Container>
  );
}

export default NewCollection;
