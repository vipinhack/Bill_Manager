import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bills: [
    {
      id: 1,
      description: 'Dominoes',
      category: 'FoodNDining',
      amount: 430,
      date: '01-02-2020',
    },
    {
      id: 2,
      description: 'Car wash',
      category: 'Utility',
      amount: 500,
      date: '01-06-2020',
    },
  ],
  monthlyBudget: 50000,
  filteredCategory: '',
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    addBill: (state, action) => {
      state.bills.push(action.payload);
    },
    editBill: (state, action) => {
      const index = state.bills.findIndex((bill) => bill.id === action.payload.id);
      if (index !== -1) state.bills[index] = action.payload;
    },
    deleteBill: (state, action) => {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
    },
    filterByCategory: (state, action) => {
      state.filteredCategory = action.payload;
    },
  },

  highlightBillsForBudget: (state, action) => {
    const budget = action.payload;
    let remainingBudget = budget;
  
    const sortedBills = [...state.bills].sort((a, b) => a.amount - b.amount);
  
    state.bills = sortedBills.map((bill) => {
      if (remainingBudget >= bill.amount) {
        remainingBudget -= bill.amount;
        return { ...bill, highlight: true }; 
      }
      return { ...bill, highlight: false };
    });
  },
  
});



export const { addBill, editBill, deleteBill, filterByCategory, highlightBillsForBudget } = billsSlice.actions;


export default billsSlice.reducer;
