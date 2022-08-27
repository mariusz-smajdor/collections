import { Field, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NewField from './NewField';
import Container from '../../components/layout/Container';
import { addCollection } from '../../services/collectionsSlice';
import { routes } from '../../shared/constants/routes';
import { useCollection } from '../../shared/hooks/useCollection';
import { Form, Label, Text, Input, Button } from '../../assets/UI/formEls';
import { Message, Title } from '../../assets/UI/textFormatEls';
import { INITIAL_VALUES, TOPICS } from './constants';
import { darkStyles, lightStyles } from './fieldStyles';
import { Icon, Item, Items } from './styled';

const { PROFILE } = routes;

function NewCollection() {
  const theme = useSelector(state => state.themeToggler.theme);
  const { message, sendCollection } = useCollection();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submitCollection(fields) {
    const { itemSetters, defaultFields, itemFields, ...restFields } = fields;

    const collection = {
      items: JSON.stringify([...defaultFields, itemFields]),
      ...restFields,
    };
    sendCollection(collection);
    dispatch(addCollection(collection));
    navigate(`/${PROFILE}`);
  }

  function removeItem(values, setValues, item) {
    const fields = [...values.itemFields];
    const itemFields = fields.filter(field => field[0] !== item);
    setValues({ ...values, itemFields });
  }

  return (
    <Container medium>
      <Formik initialValues={INITIAL_VALUES} onSubmit={submitCollection}>
        {({ values, setValues }) => (
          <Form>
            <Title>Create Collection</Title>
            <Label>
              <Text>Name:</Text>
              <Input name='name' />
            </Label>
            <Label>
              <Text>Description:</Text>
              <Input name='description' />
            </Label>
            <Label>
              <Text>Topic:</Text>
              <Field
                name='topic'
                as='select'
                style={theme === 'light' ? lightStyles : darkStyles}
              >
                {TOPICS.map((topic, i) => (
                  <option key={i}>{topic}</option>
                ))}
              </Field>
            </Label>
            <Title as='h3'>Item Fields</Title>
            <Items>
              {values.defaultFields.map(field => (
                <span key={field[0]}>{`${field[0]} (${field[1]})`}</span>
              ))}
              {values.itemFields.map(field => (
                <Item key={field[0]}>
                  <span>{`${field[0]} (${field[1]})`}</span>
                  <Icon
                    onClick={() => removeItem(values, setValues, field[0])}
                  />
                </Item>
              ))}
            </Items>
            <Button type='submit'>Create</Button>
            <NewField values={values} setValues={setValues} />
            <Message>{message}</Message>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default NewCollection;
