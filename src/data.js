export const expenseFieldNames = 
    [
        {labelName: 'Item', id: 'Item'},
        {labelName: 'Date', id: 'Date'},
        {labelName: 'Category', id: 'Category'},
        {labelName: 'Amount in Rs', id: 'Amount'}
    ];

export const categoryDataTitle = [
    'Item', 'Amount', 'Need?'
]
export const categoryList = [
    'Food', 'Travel', 'Dress', 'Grocery'
]

export const expenseSummary = [
    {
        item:'Lunch',
        category:'Food',
        dateInUTC:'2023-13-12 12:39:32',
        amountInRupees: 120,
        isNeeded: 'yes'
    },
    {
        item:'Petrol',
        category:'Travel',
        dateInUTC:'2023-13-12 05:50:52',
        amountInRupees: 500,
        isNeeded: 'yes'
    },
    {
        item:'Chat',
        category:'Food',
        dateInUTC:'2023-13-12 07:19:52',
        amountInRupees: 250,
        isNeeded: 'no'
    },
    {
        item:'Shirt',
        category:'Dress',
        dateInUTC:'2023-13-12 16:26:32',
        amountInRupees: 800,
        isNeeded: 'yes'
    },
    {
        item:'Shirt',
        category:'Dress',
        dateInUTC:'2023-13-12 20:29:52',
        amountInRupees: 1200,
        isNeeded: 'no'
    },
    {
        item:'Egg',
        category:'Grocery',
        dateInUTC:'2023-13-12 18:29:28',
        amountInRupees: 76,
        isNeeded: 'yes'
    },
    {
        item:'Cab',
        category:'Travel',
        dateInUTC:'2023-13-11 18:29:28',
        amountInRupees: 460,
        isNeeded: 'no'
    },
    {
        item:'Juice',
        category:'Food',
        dateInUTC:'2023-13-11 18:29:28',
        amountInRupees: 340,
        isNeeded: 'partial'
    }
]