import React, { useState } from 'react';
import AccountList from './AccountList';
import AccountDetails from './AccountDetails';
import AddTransactionForm from './AddTransactionForm';

function ExpenseManager() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [showAddTransactionForm, setShowAddTransactionForm] = useState(false);

  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
  };

  const handleAddTransaction = (transaction) => {
    const updatedAccounts = accounts.map((account) => {
      if (account.id === selectedAccount.id) {
        const updatedTransactions = [...account.transactions, transaction];
        return { ...account, balance: account.balance + transaction.amount, transactions: updatedTransactions };
      }
      return account;
    });
    setAccounts(updatedAccounts);
    setShowAddTransactionForm(false);
  };

  return (
    <div className="expense-manager">
      <h1>Expense Manager</h1>
      <AccountList accounts={accounts} onSelectAccount={handleSelectAccount} />
      {selectedAccount && <AccountDetails account={selectedAccount} />}
      <button onClick={() => setShowAddTransactionForm(true)}>Add Transaction</button>
      {showAddTransactionForm && selectedAccount && (
        <AddTransactionForm
          account={selectedAccount}
          onAddTransaction={handleAddTransaction}
          onClose={() => setShowAddTransactionForm(false)}
        />
      )}
    </div>
  );
}

export default ExpenseManager;
