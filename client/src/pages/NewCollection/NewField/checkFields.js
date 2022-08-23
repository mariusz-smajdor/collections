export function checkNames(itemFields, name, type, setMessage) {
  const itemExists = itemFields.some(field => field[0] === name);
  itemExists
    ? setMessage('Item with this name already exists!')
    : itemFields.push([name, type]);
}

export function checkTypes(itemFields, setMessage) {
  itemFields.reduce((obj, field) => {
    const type = field[1];
    if (obj[type] == null) obj[type] = 0;
    obj[type]++;
    if (obj[type] === 4) {
      obj[type]--;
      itemFields.pop();
      setMessage('You can add only three fields of the same type.');
    }

    return obj;
  }, {});
}
