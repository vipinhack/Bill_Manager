import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const TimeSeriesChart = () => {
  const bills = useSelector((state) => state.bills.bills);

  const data = bills.map((bill) => ({
    date: bill.date,
    amount: bill.amount,
  }));

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
    </LineChart>
  );

  
};

export default TimeSeriesChart;
