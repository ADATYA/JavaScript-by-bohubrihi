import React from 'react';

function AccountDetails({ account }) {
  return (
    <div className="account-details">
      <h2>{account.name} ({account.category})</h2>
      <h3>Balance: ₹{account.balance}</h3>
      {/* Display transactions list here */}
    </div>
  );
}

export default AccountDetails;
