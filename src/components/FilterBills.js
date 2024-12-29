import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/billsSlice';

const FilterBills = () => {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(filterByCategory(e.target.value))}>
      <option value="">All</option>
      <option value="FoodNDining">Food & Dining</option>
      <option value="Utility">Utility</option>
      <option value="Shopping">Shopping</option>
      <option value="Education">Education</option>
      <option value="Personal Care">Personal Care</option>
      <option value="Travel">Travel</option>
    </select>
  );
};

export default FilterBills;
