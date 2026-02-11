ucs.unza
A modern, high-performance monorepo architecture using pnpm workspaces. This setup includes a React frontend, a TypeScript Express backend, and a type-safe database layer.
🏗 Project Structure
text
ucs.unza/
├── apps/
│   ├── client/       # Frontend: React + Vite (TS)
│   └── server/       # Backend: Express + TypeScript + Drizzle ORM
├── packages/
│   └── shared/       # Shared: Common types and constants
├── drizzle/          # Database: Generated SQL migrations
├── package.json      # Root config with workspace scripts
└── pnpm-workspace.yaml


🛠 Prerequisites
Node.js (v18+)
pnpm (v10+)
PostgreSQL (Local or hosted like Neon.tech)
🚀 Installation & Setup

bash
git clone <your-repo-url>
cd ucs.unza
pnpm install


Environment Configuration:
Create a .env file in apps/server/:
bash
DATABASE_URL=postgres://user:password@localhost:5432/ucs_unza


Initialize Database:
Generate the SQL migrations and push the schema to your database:
bash
cd apps/server
pnpm drizzle-kit generate
pnpm drizzle-kit push


💻 Development
Run both the frontend and backend simultaneously from the root:
bash
pnpm dev


Frontend: http://localhost:5173
Backend API: http://localhost:3000/api
🗄️ Database Schema
The system is currently configured with the following tables:
Users: Authentication and profile data.
Blogs: Post content linked to authors.
Notifications: User-specific alerts and system messages.
To modify the schema, edit apps/server/src/db/schema.ts and run pnpm drizzle-kit generate.
📜 Deployment
Build all projects:
bash
pnpm build


The production-ready files are located in the respective dist/ folders.
Final Push

