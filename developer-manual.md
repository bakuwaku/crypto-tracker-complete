# Developer Manual

## Setup Instructions

1. Clone the repository  
2. Install backend dependencies:  
   ```
   cd server  
   npm install  
   ```
3. Install frontend dependencies:  
   ```
   cd client  
   npm install  
   ```

## Running the App

Backend:
```
cd server  
node index.js
```

Frontend:
```
cd client  
npm start
```

## API Endpoints

- `GET /api/crypto/top`: Get top 10 crypto prices
- `GET /api/portfolio`: Get current portfolio
- `POST /api/portfolio`: Add coin to portfolio (`{ coin, amount }`)

## Roadmap

- Add user authentication
- Save portfolios in MongoDB
- More alert/notification features