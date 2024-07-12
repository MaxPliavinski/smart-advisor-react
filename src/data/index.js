export const FORM_STEPS = ['basics', 'activities', 'premise', 'results'];

export const businessLocationFormFields = [
  {
    id: 'amana',
    type: 'select',
    label: 'Amana',
    options: ['United States', 'Canada'],
    required: true,
  },
  {
    id: 'municipality',
    type: 'select',
    label: 'Municipality',
    options: ['United States', 'Canada'],
    required: true,
  },
  {
    id: 'district',
    type: 'input',
    label: 'District',
    placeholder: 'Enter a district',
    required: false,
  },
  {
    id: 'street',
    type: 'input',
    label: 'Street',
    placeholder: 'Enter a street',
    required: false,
  },
];
