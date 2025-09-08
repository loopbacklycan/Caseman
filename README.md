# 🕵️‍♂️ Caseman

**Caseman** is a powerful and intuitive case management system built for hackers, professionals, and law enforcement. Whether you're investigating OSINT, SIGINT, HUMINT, cybercrime, trafficking, or missing persons, Caseman helps you organize, track, and collaborate on complex cases from a single streamlined interface.

<p align="center">
  <img src="https://github.com/0wardriver0/Caseman/blob/main/caseman1.png?raw=true" alt="Caseman Screenshot 1" width="48%" />
  <img src="https://github.com/0wardriver0/Caseman/blob/main/caseman2.png?raw=true" alt="Caseman Screenshot 2" width="48%" />
</p>


---

## 🚀 Features

- 🔍 **Multi-Discipline Case Creation**  
  Create and manage cases based on:
  - OSINT (Open Source Intelligence)
  - SIGINT (Signals Intelligence)
  - HUMINT (Human Intelligence)
  - Cybercrime investigations
  - Communication monitoring
  - Human trafficking
  - Missing persons

- 🗂️ **Structured Case Management**  
  Organize data into categories, timelines, and evidence collections for efficient analysis.

- 🔎 **Searchable & Indexed Data**  
  Lightning-fast querying and indexing of all stored case information using Prisma and a powerful backend.

- 📡 **Real-Time Updates**  
  Stay in sync with live updates and activity feeds.

- 🔐 **Security-Oriented**  
  Designed with a privacy-first mindset for sensitive investigations and secure collaboration.

- 🧠 **Hacker-Friendly UI**  
  Sleek, dark-mode optimized interface with efficient workflows tailored for OSINT/CyberSec pros.

---

## 🧱 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Backend:** Next.js API Routes / Custom Node.js Services
- **Styling:** TailwindCSS or ShadCN (optional based on setup)
  
---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/loopbacklycan/caseman.git
cd caseman

# 2. Install dependencies
npm install

# 3. Set up the database
npx prisma migrate dev --name init

# 4. Run the dev server
npm run dev
```
