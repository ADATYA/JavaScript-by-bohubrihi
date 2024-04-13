import React, { useState } from 'react';

function AddTransactionForm({ account, onAddTransaction, onClose }) {
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      type: type,
      amount: parseFloat(amount),
      description,
      date
    }
}
}