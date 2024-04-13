import React from 'react';

function AccountList({ accounts, onSelectAccount }) {
  return (
    <ul className="account-list">
      {accounts.map((account) => (
        <li key={account.id} onClick={() => onSelectAccount(account)}>
          {account.name} ({account.category}) - Balance: ₹{account.balance}
        </li>
      ))}
    </ul>
  );
}

export default AccountList;
