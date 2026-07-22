# Blood-Stream

A blood bank and blood donation management platform — donation camps, live blood stock tracking, blood requests, donor appointments, and nearby blood bank search.

## Stack

- **Client**: React 19, Vite, React Router, Tailwind CSS, Leaflet (maps), Clerk (auth)
- **Server**: Node.js, Express 5, MongoDB (Mongoose), Clerk (session verification)

## Project structure

```
client/   React SPA (Vite)
server/   Express API
  app.js        Express app (routes, middleware) — imported directly by tests
  server.js     Process entrypoint — loads env, connects DB, starts listening
  routes/       One router per resource
  models/       Mongoose schemas
  middleware/   Auth + centralized error handling
  tests/        Jest + Supertest
```

## Setup

### Prerequisites
- Node.js 18+
- A MongoDB connection string (e.g. MongoDB Atlas)
- A Clerk application (publishable + secret key)

### Server

```bash
cd server
npm install
cp .env.example .env   # fill in MONGO_URI, CLERK_SECRET_KEY, etc.
npm run dev             # nodemon, or `npm start` for a plain run
npm test                # runs the Jest/Supertest suite
```

### Client

```bash
cd client
npm install
cp .env.example .env   # fill in VITE_API_URL, VITE_CLERK_PUBLISHABLE_KEY
npm run dev
```

## Environment variables

**server/.env**
| Variable | Purpose |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | API port (default 5000) |
| `CLIENT_URL` | Allowed CORS origin (default `http://localhost:5173`) |
| `CLERK_SECRET_KEY` | Clerk backend secret key, used to verify session tokens |

**client/.env**
| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Base URL of the API (default `http://localhost:5000`) |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

## API routes

All routes are prefixed with `/api`. Routes marked **Auth** require a valid Clerk session (`Authorization: Bearer <token>`), sent automatically by the client's shared axios instance.

| Method | Route | Access | Description |
|---|---|---|---|
| GET | `/health` | Public | Health check |
| GET | `/bloodbanks/nearby` | Public | Nearby blood banks by lat/lng (static CSV dataset) |
| GET | `/camps` | Public | List blood donation camps |
| POST | `/camps` | Auth | Create a blood donation camp |
| POST | `/save-user` | Auth | Sync the signed-in Clerk user into the database |
| GET | `/all-users` | Auth | Paginated list of users (`?page=&limit=`) |
| GET | `/bloodstock` | Public | Current blood stock counts by type |
| POST | `/bloodstock/add` | Auth | Add a blood unit to stock |
| DELETE | `/bloodstock/:unitId` | Auth | Mark a blood unit as used |
| GET | `/bloodrequests` | Public | List blood requests (filterable) |
| POST | `/bloodrequests` | Auth | Create a blood request |
| PATCH | `/bloodrequests/:id/status` | Auth | Update a blood request's status |
| GET | `/appointments` | Public | List donation appointments |
| POST | `/appointments` | Auth | Schedule an appointment |
| PATCH | `/appointments/:id/status` | Auth | Update an appointment's status |
| DELETE | `/appointments/:id` | Auth | Delete an appointment |

## Testing

The server has a Jest + Supertest suite (`server/tests/`) covering health/404 handling, auth enforcement on write routes, and basic validation. Run with `npm test` inside `server/`.

The client does not yet have an automated test suite.
