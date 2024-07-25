export const expenseFieldNames = 
    [
        {labelName: 'Item', id: 'Item', fieldType: 'text'},
        {labelName: 'Date', id: 'Date', fieldType: 'date',
            fieldMin: new Date('2024-01-01').toISOString().split('T')[0], 
            fieldMax: new Date('2049-12-31').toISOString().split('T')[0]},
            // fieldValue: new Date().toISOString().split('T')[0]},
        {labelName: 'Category', id: 'Category', fieldType:'select'},
        {labelName: 'Amount in Rs', id: 'Amount', fieldType:'number'},
        {labelName: 'Essential?', id: 'Essential', fieldType:'radio'}
    ];

export const categoryDataTitle = [
    'Item', 'Amount', 'Need?'
    ,'Date'
]
export const categoryList = [
    'Food', 'Travel', 'Dress', 'Grocery'
]

export const expenseSummary = [
    {
        item:'Lunch',
        category:'Food',
        dateInUTC:new Date('2023-02-09'),
        amountInRupees: 120,
        isNeeded: 'yes'
    },
    {
        item:'Petrol',
        category:'Travel',
        dateInUTC:new Date('2023-05-07'),
        amountInRupees: 500,
        isNeeded: 'yes'
    },
    {
        item:'Chat',
        category:'Food',
        dateInUTC:new Date('2023-11-10'),
        amountInRupees: 250,
        isNeeded: 'no'
    },
    {
        item:'Shirt',
        category:'Dress',
        dateInUTC:new Date('2023-11-23'),
        amountInRupees: 800,
        isNeeded: 'yes'
    },
    {
        item:'Shirt',
        category:'Dress',
        dateInUTC:new Date('2023-05-12'),
        amountInRupees: 1200,
        isNeeded: 'no'
    },
    {
        item:'Egg',
        category:'Grocery',
        dateInUTC:new Date('2023-11-12'),
        amountInRupees: 76,
        isNeeded: 'yes'
    },
    {
        item:'Cab',
        category:'Travel',
        dateInUTC:new Date('2023-09-11'),
        amountInRupees: 460,
        isNeeded: 'no'
    },
    {
        item:'Juice',
        category:'Food',
        dateInUTC:new Date('2023-12-11'),
        amountInRupees: 340,
        isNeeded: 'partial'
    }
]