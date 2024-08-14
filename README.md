```markdown
# Express Authentication Service

This project provides a REST API using Express and Passport.js for authentication with Bearer tokens.

## Requirements

- Node.js
- npm
- Docker (optional)

## Installation

1. Clone the repository:

```sh
git clone <repository_url>
cd project
```

2. Install dependencies:

```sh
npm install
```

5. Create a `.env` file with the following content:

```env
PORT=3000
```

## Running the Project

To start the server:

```sh
npm start
```

The server will be running at `http://localhost:3000`.

## Available API Endpoints

### `POST /api/login`

Request body:

```json
{
  "email": "user1@example.com",
  "password": "password1"
}
```

Response (success):

```json
{
  "accessToken": "mockToken1"
}
```

Response (failure):

```json
{
  "message": "Invalid email or password"
}
```

### `GET /api/profile`

Requires a valid Bearer token. Use the accessToken obtained from `/login`.

Response (success):

```json
{
  "email": "user1@example.com",
  "username": "user1"
}
```

Response (failure):

```json
{
  "message": "Invalid token"
}
```

# Test Users
- Email: user1@example.com, Password: password1, Token: mockToken1
- Email: user2@example.com, Password: password2, Token: mockToken2


```
