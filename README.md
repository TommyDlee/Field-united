# FIELD United Platform

This repository contains both the FIELD main website and the FIELD DApp.

## Project Structure

- `/frontend` - Main FIELD website
- `/dapp` - FIELD DApp application 
- `/backend` - Backend services

## Development Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Run the setup script to install all dependencies:
```bash
./setup.sh
```

Or install dependencies manually:

```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend
npm install
cd ..

# DApp dependencies
cd dapp
npm install
cd ..
```

### Running the Applications

#### Run Both Applications Together (Recommended)

From the root directory:
```bash
npm start
```

This will:
1. Start the DApp server on http://localhost:3001
2. Wait 2 seconds for the DApp server to initialize
3. Start the frontend on http://localhost:3000

The DApp is accessible via:
- Direct access: http://localhost:3001
- Through frontend: http://localhost:3000/dapp

#### Run Applications Separately

To run only the frontend:
```bash
npm run start:frontend
```

To run only the DApp:
```bash
npm run start:dapp
```

> **Note:** If you run only the frontend without the DApp, the DApp link in the menu will show a loading screen since the DApp server is not running.

## Navigation

When a user clicks on "Dapp" in the Ecosystem dropdown menu from the frontend, they will be redirected to the DApp application at `/dapp`.

## Troubleshooting

### Proxy Connection Errors

If you see proxy connection errors in the console, this usually means the DApp server isn't running. Make sure to start both servers using `npm start` from the root directory.

### Incorrect Routing in DApp

If links within the DApp are not working correctly, check that you're accessing the DApp through the correct URL:
- When accessing through frontend: http://localhost:3000/dapp
- When accessing directly: http://localhost:3001

## Building for Production

To build both applications:
```bash
npm run build
```

This will create:
- Frontend build in `/frontend/dist`
- DApp build in `/dapp/dist`

For deployment, you'll need to ensure the proxy setup is correctly configured on your production server.
