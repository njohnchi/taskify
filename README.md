# Taskify

Taskify is a task management system built with NestJS, GraphQL, Prisma, Nuxt.js, and PostgreSQL. It consists of two main components: the server (backend) and the client (frontend).

## Server (Backend)

The server is responsible for handling the backend logic, data storage, and GraphQL API.

### Features

- **User Authentication:** Secure sign-up, log-in, and log-out functionality.
- **Task CRUD Operations:** Create, update, delete, and view tasks with details like title, description, due date, and status.
- **GraphQL Integration:** Utilize GraphQL for efficient querying and mutation of tasks.
- **Real-Time Updates:** Experience real-time updates using GraphQL subscriptions for task changes.

### Tech Stack

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

### Getting Started

1. **Install PostgreSQL:**
   - Follow the [official PostgreSQL installation guide](https://www.postgresql.org/download/) to set up PostgreSQL on your system.

2. **Create a PostgreSQL Database:**
   - Create a PostgreSQL database and update the connection details in the `server/prisma/schema.prisma` file.

3. **Navigate to the Server Folder:**
   ```bash
   cd server
   ```

4. **Install Dependencies:**
   ```bash
   npm install
   ```

5. **Run Migrations:**
   ```bash
   npx prisma migrate dev
   ```

6. **Run the Server:**
   ```bash
   npm run start
   ```

   The server will be accessible at [http://localhost:3000](http://localhost:3000).


## Client (Frontend)

The client is responsible for handling the user interface and interactions.

### Features

- **Task List:** View and manage tasks efficiently.
- **User Authentication:** Sign-up, log-in, and log-out securely.
- **GraphQL Integration:** Communicate with the backend using GraphQL for tasks-related operations.
- **Real-Time Updates:** Experience real-time updates for task changes.

### Tech Stack

- [Nuxt.js](https://nuxtjs.org/)
- [Vue.js](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)

### Getting Started

1. **Navigate to the Client Folder:**
   ```bash
   cd client
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Client:**
   ```bash
   npm run dev
   ```

   The client will be accessible at [http://localhost:3000](http://localhost:3000).