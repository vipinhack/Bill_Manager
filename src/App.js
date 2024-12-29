import React from 'react';
import AddEditBill from './components/AddEditBill';
import FilterBills from './components/FilterBills';
import BillDashboard from './components/BillDashboard';
import HighlightBills from './components/HighlightBills';
import TimeSeriesChart from './components/TimeSeriesChart';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Bill Manager</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <AddEditBill />
        </div>
        <div className="col-md-6 mb-4">
          <FilterBills />
          <HighlightBills />
        </div>
      </div>
      <BillDashboard />
      <div className="mt-4">
        <TimeSeriesChart />
      </div>
    </div>
  );
}

export default App;
