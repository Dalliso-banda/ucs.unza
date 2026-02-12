🎓 UCS UNZA Monorepo
A high-performance, full-stack monorepo architecture for the University Computer Society. Built with a focus on type safety, shared logic, and scalable development workflows.

🏗️ Architecture Overview
This project uses pnpm Workspaces to manage multiple packages in a single repository, enabling seamless code sharing and lightning-fast installations.
- apps/client: Frontend built with React 19, Vite, and Tailwind CSS v4.
- apps/server: Backend API built with Express, Node.js (ESM), and TypeScript.
- packages/shared: A shared library for TypeScript interfaces, constants, and validation logic.

Database: PostgreSQL managed via Drizzle ORM and containerized with Docker.

🛠️ Technology Stack
| Layer            | Technology                                                                    |
|------------------|-------------------------------------------------------------------------------|
| Package Manager   | pnpm v10                                                                      |
| Frontend         | React, Vite, Tailwind CSS v4, Axios, React Router                            |
| Backend          | Express, TypeScript (ESM), ts-node                                          |
| Database         | PostgreSQL, Drizzle ORM                                                      |
| Auth             | JSON Web Tokens (JWT), BcryptJS                                             |
| DevOps           | Docker, Docker Compose                                                       |

🚀 Getting Started

1. Prerequisites
Ensure you have the following installed:
- Node.js (LTS)
- pnpm
- Docker & Docker Compose

2. Environment Setup
Create a .env file in apps/server/.env:
```bash
DATABASE_URL=postgresql://dev_user:dev_password@localhost:5432/ucs_unza
JWT_SECRET=your_random_secret_key_here
```


3. Installation
From the root directory, install all dependencies for all apps:
```bash
pnpm install
```


4. Database Initialization
Spin up the PostgreSQL container and push the schema:
```bash
# Start Docker Container
docker compose up -d

# Generate & Push Schema
cd apps/server
pnpm drizzle-kit generate
pnpm drizzle-kit push
```


5. Running the App
Start the entire stack (Frontend + Backend) in parallel from the root:
```bash
pnpm dev
```


Frontend: http://localhost:5173
Backend: http://localhost:3000

🔐 Authentication Workflow
- **Registration**: Users register via /api/auth/register. Passwords are hashed using bcryptjs before storage.
- **Login**: /api/auth/login verifies credentials and returns a JWT.
- **Storage**: The frontend stores the JWT in localStorage.
- **Interceptors**: An Axios interceptor in apps/client/src/lib/api.ts automatically attaches the token to the Authorization header for all requests.
- **Protected Routes**: Backend routes (like blog creation) are guarded by the authenticate middleware.

🗄️ Database Management
We use Drizzle ORM for a "TypeScript-first" database experience.
- **Schema Location**: apps/server/src/db/schema.ts
- **Migrations**: Found in apps/server/drizzle/
- **GUI Tool**: Run pnpm drizzle-kit studio in the server folder to view data in your browser.

🤝 Development Standards
- **Commits**: Follow Conventional Commits (e.g., feat(auth): add login logic).
- **Styles**: Tailwind CSS v4 is used with a CSS-first approach (@import "tailwindcss").
- **ESM**: The backend uses ES Modules. Always include .js extensions in local imports (e.g., import { x } from './file.js').


