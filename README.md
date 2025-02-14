# Trade History API

The Trade History API is a RESTful service designed to manage and track trade transactions. It provides endpoints for creating trades, retrieving trade history, and more. The API is built using Node.js, Express, and Sequelize, with support for WebSocket connections via Socket.io.

## Features

- **Create Trades**: Add new trade records to the database.
- **Retrieve Trade History**: Fetch trade records for a specific user with pagination support.
- **WebSocket Support**: Real-time updates on trade activities.
- **Swagger Documentation**: Comprehensive API documentation available at `/api-docs`.

## Getting Started

### Prerequisites

- Node.js (v20.10.0 or later)
- PostgreSQL
- Redis

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/trade-history-api.git
   cd trade-history-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     DATABASE_URL=your_database_url
     REDIS_URL=your_redis_url
     JWT_SECRET=your_jwt_secret
     PORT=your_port_number
     ```

4. Run database migrations and seed data:
   ```bash
   npm run seed
   ```

### Running the Application

- Start the server:
  ```bash
  npm start
  ```

- For development with live reloading:
  ```bash
  npm run dev
  ```

### Testing

- Run tests:
  ```bash
  npm test
  ```

## API Documentation

The API documentation is generated using Swagger and can be accessed at `/api-docs` once the server is running.
![API Documentation](https://firebasestorage.googleapis.com/v0/b/lumenxrviewer.firebasestorage.app/o/Screenshot_244.png?alt=media&token=e9243465-060a-405c-9672-c60e3feabdbe)

## Code Structure

- **`server.js`**: Entry point of the application, sets up the HTTP server and WebSocket connections.
- **`app.js`**: Configures the Express application, including middleware and routes.
- **`routes/`**: Contains route definitions for the API.
- **`controllers/`**: Handles the business logic for each route.
- **`models/`**: Defines the database models using Sequelize.
- **`middleware/`**: Contains middleware functions, such as authentication.
- **`services/`**: Provides services for handling complex operations, such as database interactions and caching.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Contact

For any inquiries, please contact [lolz57675@gmail.com](mailto:lolz57675@gmail.com).
