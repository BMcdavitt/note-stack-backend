Tech Stack

- Express
- Sequelize
- postgreSQL

Setup

- npm install

Setup the Database

- in config/config.json update database settings (user/pw etc)
- create database manually called note_stack
- npx sequelize-cli db:migrate

Setup Environment Variables

- create .env file in main folder

- DB_NAME="note_stack"
- DB_USER="postgres"
- DB_PASSWORD="password"
- DB_HOST="localhost"
- DB_PORT="5432"

Startup the server

- npm run start
