export const TOPICS = [
  'Books',
  'Signs',
  'Silverware',
  'Stamps',
  'Games',
  'Cards',
];

export const SELECT_TYPE = [
  { content: 'Text', options: { type: 'text' } },
  { content: 'Integer', options: { type: 'number', step: 1 } },
  { content: 'Textarea', options: { as: 'textarea', row: 5 } },
  { content: 'Checkbox', options: { type: 'checkbox' } },
  { content: 'Date', options: { type: 'date' } },
];
