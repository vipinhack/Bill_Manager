import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { highlightBillsForBudget } from '../redux/billsSlice';

const HighlightBills = () => {
  const [budget, setBudget] = useState('');
  const dispatch = useDispatch();

  const handleHighlight = () => {
    dispatch(highlightBillsForBudget(Number(budget)));
  };

  return (
    <div className="card p-3">
      <h4>Highlight Bills</h4>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <button className="btn btn-success w-100" onClick={handleHighlight}>
        Highlight Bills
      </button>
    </div>
  );
};

export default HighlightBills;
