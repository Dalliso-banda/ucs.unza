ucs.unza Monorepo (Vite + Express) 
A modern, high-performance monorepo architecture using pnpm workspaces. This setup allows for seamless code sharing between a React frontend and a TypeScript backend. 
🏗 Project Structure
text
ucs.unza/
├── apps/
│   ├── client/       # Frontend: React + Vite (TS)
│   └── server/       # Backend: Express + TypeScript
├── packages/
│   └── shared/       # Shared: Common types, constants, and logic
├── package.json      # Root config with workspace scripts
└── pnpm-workspace.yaml
Use code with caution.

🛠 Prerequisites
Ensure you have the following installed:
Node.js (v18+)
pnpm (v10+): Install via pnpm.io or curl -fsSL https://get.pnpm.io | sh -
🚀 Installation & Setup
Clone the Repository:
bash
git clone <your-repo-url>
cd ucs.unza
Use code with caution.

Install Dependencies:
Run this from the root folder to link all workspace packages:
bash
pnpm install
Use code with caution.

Configure Environment:
Frontend: Check apps/client/vite.config.ts to ensure the proxy points to http://localhost:3000.
Backend: Ensure apps/server/src/index.ts is listening on port 3000. 
💻 Development
You can run both the frontend and backend simultaneously from the root directory: 
bash
pnpm dev
Use code with caution.

Frontend: http://localhost:5173
Backend API: http://localhost:3000/api
Manual Package Controls
If you need to run commands for specific apps only:
Client only: pnpm --filter client dev
Server only: pnpm --filter server dev
🔗 Shared Code Usage
The @repo/shared package allows you to define a single source of truth.
To add a new shared constant:
Edit packages/shared/index.ts:
typescript
export const API_VERSION = "v1";
Use code with caution.

Use it in the server or client:
typescript
import { API_VERSION } from '@repo/shared';
Use code with caution.

📜 Deployment
Build all projects:
bash
pnpm build
Use code with caution.

The production-ready files will be located in the respective dist/ folders of each app.
🤝 Contributing
This project uses Semantic Commits. Please follow the Conventional Commits specification:
feat(...): A new feature
fix(...): A bug fix
chore(...): Maintenance or configuration changes

