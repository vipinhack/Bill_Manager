import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBill, editBill } from '../redux/billsSlice';

const AddEditBill = ({ editMode = false, billData = {} }) => {
  const [bill, setBill] = useState(
    editMode ? billData : { id: '', description: '', category: '', amount: '', date: '' }
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (editMode) {
      dispatch(editBill(bill));
    } else {
      dispatch(addBill({ ...bill, id: Date.now() }));
    }
    setBill({ id: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <div className="card p-3">
      <h4>{editMode ? 'Edit Bill' : 'Add New Bill'}</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={bill.description}
            onChange={(e) => setBill({ ...bill, description: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={bill.category}
            onChange={(e) => setBill({ ...bill, category: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={bill.amount}
            onChange={(e) => setBill({ ...bill, amount: parseFloat(e.target.value) })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={bill.date}
            onChange={(e) => setBill({ ...bill, date: e.target.value })}
          />
        </div>
        <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
          {editMode ? 'Update Bill' : 'Add Bill'}
        </button>
      </form>
    </div>
  );
};

export default AddEditBill;
