# Spend! - spending tracker
## By: Fathmath Mishqa Niyaz | UWE ID: 24019737


## Proeject Description
Spend! is a mobile spending tracker application developed using React Native and Expo. The app allows users to record their income and expenses, view their transaction history, and monitor their spending statistics.
The purpose of the application is to provide a simple way for users to keep track of their personal finances. Transaction data is stored locally on the device, allowing the user's information to remain available even after the application is closed and reopened.

-----------

## Installation & Run Instructions

### Requirements
Before running the project, make sure the following are installed:
- Node.js
- npm
- Expo Go on mobile device
- Git

### Step 1 - Clone the Repository
```bash
git clone https://github.com/Mshqa14/Spend_Sample.git
```

### Step 2 - Open Project Folder
```bash
cd Spend_Sample
```

### Step 3 - Install Dependencies
```bash
npm install
```

### Step 4 - Start Application
```bash
npx expo start
```
### Step 5 - Run on Mobile Device
Open Expo Go on an Android or iOS device and scan the QR code displayed after starting the project.
The computer and mobile device should be connected to the same Wi-Fi network when using the local connection.

If there are problems with the cache, the project can be restarted using:
```bash
npx expo start -c
```

----------

## Features 
### Home
The Home screen provides an overview of the users financial activity, including their current balance, total income, total expenses, and recent transactions.

### Add Transactions
Users can add new income or expense transactions. Each transaction contains:
- Transaction name
- Amount
- Category
- Transaction type (Income or Expense)
- Date

### History
The Transactions screen displays all saved transactions. Income and expenses are differentiated to make the transaction history easier to understand.

### Statistics
The Statistics screen provides a summary of the user's financial activity, including total income, total spending, savings, and spending by category.

### Local Data Persistence
Transactions are stored locally using AsyncStorage with MobX persistence. This means saved transactions remain available when the application is closed and reopened.

### Navigation
The application uses a bottom tab navigation system with icons that allows users to move between:
- Home
- Transactions
- Statistics
- Setting

----------

## Screenshots










----------

## Technologies Used
- React Native
- Expo
- Expo Router
- TypeScript
- MobX
- mobx-persist-store
- AsyncStorage
- NativeWind
- React Navigation
- GitHub

----------

### Future Improvements

The application could use features such as:
- Editing existing transactions
- Deleting transactions through the user interface
- Searching and filtering transactions
- Monthly spending budgets.
- Additional accessibility and customization options.