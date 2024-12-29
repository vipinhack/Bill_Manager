import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBill } from '../redux/billsSlice';

const BillDashboard = () => {
  const bills = useSelector((state) => state.bills.bills);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      {bills.map((bill) => (
        <div
          key={bill.id}
          className={`card mb-3 p-3 ${bill.highlight ? 'border-success bg-light' : ''}`}
        >
          <div className="row">
            <div className="col-md-8">
              <h5>{bill.description}</h5>
              <p>Category: {bill.category}</p>
              <p>Amount: ₹{bill.amount}</p>
              <p>Date: {bill.date}</p>
            </div>
            <div className="col-md-4 text-end">
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => console.log('Edit Bill')}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(deleteBill(bill.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BillDashboard;
