# DairyGuard - Dairy Management System

A modern, full-stack dairy management system designed to streamline dairy farm operations and enhance efficiency.

## Features
- User authentication and authorization.
- Dashboard for managing orders and items.
- Admin panel for managing users and items.

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- ESLint for code quality
- PostCSS for CSS processing

### Backend
- Node.js
- Express.js
- RESTful API architecture

## Dependencies
- Key dependencies include:
  - **React**: For building user interfaces.
  - **Axios**: For making HTTP requests.
  - **Firebase**: For backend services.
  - **React Router**: For routing within the application.
  - **Tailwind CSS**: For styling the application.
  - **SweetAlert2**: For alert dialogs.

## Project Structure
```
dairy-management-system/
├── dairyguard-client/   # Frontend application
│   ├── src/             # React components and logic
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
├── dairyguard-server/   # Backend application
│   ├── api/             # API routes and controllers
│   └── package.json     # Backend dependencies
└── .env.vault           # Environment variables
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dairyguard.git
   cd dairyguard
   ```

2. Install frontend dependencies:
   ```bash
   cd dairyguard-client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../dairyguard-server
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd dairyguard-server
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd ../dairyguard-client
   npm run dev
   ```

## Environment Variables

Create `.env` files in both client and server directories with the required configuration.

## Preview

![preview img](/preview1.png)
![preview img](/preview2.png)
![preview img](/preview3.png)


