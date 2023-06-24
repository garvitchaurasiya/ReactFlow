export default [
  {
    id: '1',
    type: 'colorChooser',
    data: { color: '#4FD1C5' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    type: 'outputNode',
    data: { color: '#F6E05E', show: 'Number % 2 = Remainder' },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'outputNode',
    data: { color: '#B794F4', show: 'Result'},
    position: { x: 250, y: 250 },
  },
];
