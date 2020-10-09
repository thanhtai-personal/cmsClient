export const valueType = {
  number: 'number',
  text: 'text',
  date: 'date'
}

const tableConfig = {
  columns: [
    {
      key: 'name',
      name: 'Name',
      align: 'left',
      valueType: valueType.text
    },
    {
      key: 'description',
      name: 'Description',
      align: 'left',
      valueType: valueType.text
    },
    {
      key: 'unitPrice',
      name: 'Unit Price',
      align: 'right',
      valueType: valueType.number
    },
    {
      key: 'quantity',
      name: 'Quantity',
      align: 'right',
      valueType: valueType.number
    },
    {
      key: 'sold',
      name: 'Sold', // đã bán
      align: 'right',
      valueType: valueType.number
    },
    {
      key: 'inventory',
      name: 'Inventory', // tồn kho
      align: 'right',
      valueType: valueType.number
    }
  ]
}

export default tableConfig