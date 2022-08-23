import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Field } from 'formik';

import { SELECT_OPTIONS } from '../constants';
import { checkNames, checkTypes } from './checkFields';
import { Label, Input, Button } from '../../../assets/UI/formEls';
import { Message, Title } from '../../../assets/UI/textFormatEls';
import { darkStyles, lightStyles } from '../fieldStyles';

function NewField({ values, setValues }) {
  const [message, setMessage] = useState('');
  const theme = useSelector(state => state.themeToggler.theme);

  function addItemField() {
    const { name, type } = values.itemSetters[0];
    const itemFields = [...values.itemFields];
    setMessage('');
    checkNames(itemFields, name, type, setMessage);
    checkTypes(itemFields, setMessage);
    setValues({ ...values, itemFields });
  }

  return (
    <>
      <Title as='h3'>Add New Item Field</Title>
      <Label>
        <Input placeholder='Field name' name={`itemSetters.${0}.name`} />
        <Field
          style={theme === 'light' ? lightStyles : darkStyles}
          placeholder='Field type'
          as='select'
          name={`itemSetters.${0}.type`}
        >
          {SELECT_OPTIONS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
      </Label>
      <Message>{message}</Message>
      <Button onClick={addItemField} type='button'>
        Add New Field
      </Button>
    </>
  );
}

export default NewField;
