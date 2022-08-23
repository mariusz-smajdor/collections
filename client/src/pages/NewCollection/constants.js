export const TOPICS = [
  'Books',
  'Signs',
  'Silverware',
  'Stamps',
  'Games',
  'Cards',
];

export const INITIAL_VALUES = {
  name: '',
  description: '',
  topic: 'Books',
  image: '',
  itemSetters: [{ name: '', type: 'Text' }],
  defaultFields: [
    ['Name', 'Text'],
    ['Tags', 'Text'],
  ],
  itemFields: [],
};

export const SELECT_OPTIONS = [
  'Text',
  'Number',
  'Textarea',
  'Checkbox',
  'Date',
];
