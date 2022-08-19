import { useState } from 'react';

export function useInputValue({ initialValues }) {
  const [value, setValue] = useState(initialValues);

  function changeValue(e) {
    const { name, value } = e.target;

    setValue(prev => {
      return { ...prev, [name]: value };
    });
  }

  return {
    value,
    changeValue,
  };
}
