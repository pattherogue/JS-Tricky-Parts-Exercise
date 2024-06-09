function createAccount(pin, amount) {
    let balance = amount;
  
    return {
      checkBalance: function(enteredPin) {
        if (enteredPin === pin) {
          return `Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
      deposit: function(enteredPin, depositAmount) {
        if (enteredPin === pin) {
          balance += depositAmount;
          return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
      withdraw: function(enteredPin, withdrawalAmount) {
        if (enteredPin === pin) {
          if (balance >= withdrawalAmount) {
            balance -= withdrawalAmount;
            return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
          } else {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
      changePin: function(oldPin, newPin) {
        if (oldPin === pin) {
          pin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      }
    };
  }
  
  module.exports = { createAccount };
  