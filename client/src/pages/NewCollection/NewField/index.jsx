import { useEffect, useState } from 'react';
import { useFieldArray } from 'react-hook-form';

import { SELECT_TYPE } from '../constants';
import { Label, Input, Button, Form, Text } from '../../../assets/UI/formEls';
import { Message, Title } from '../../../assets/UI/textFormatEls';
import { Item, Items } from '../styled';

function NewField({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  return (
    <>
      <Title>Item Fields</Title>
      {fields.map(({ id }, index) => {
        return (
          <Items key={id}>
            <Label>
              <Text>Field name:</Text>
              <Input
                {...register(`items[${index}].item`, {
                  required: 'This field must not be empty.',
                })}
              />
            </Label>
            {!!errors.items?.[index]?.item?.message && (
              <Message>{errors.items?.[index]?.item?.message}</Message>
            )}
            <Label>
              <Text>Field type:</Text>
              <Input as='select' {...register(`items[${index}].options`)}>
                {SELECT_TYPE.map(({ content }) => (
                  <option key={content} value={content}>
                    {content}
                  </option>
                ))}
              </Input>
            </Label>
            {!!errors.items?.[index]?.options?.message && (
              <Message>{errors.items?.[index]?.options?.message}</Message>
            )}
            <Button type='button' onClick={() => remove(index)}>
              Remove Item Field
            </Button>
          </Items>
        );
      })}
      <Button type='button' onClick={() => append({})}>
        Add New Field
      </Button>
    </>
  );
}

export default NewField;
