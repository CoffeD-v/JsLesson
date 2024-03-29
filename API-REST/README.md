# Some API REST simple for data consume

[🇧🇷 Clique aqui para acessar a versão em português.](./README.pt-br.md)


To deploy the project with SQLite, copy the `.env_example` file to `.env`.  

You will also need to add a secret key to the `.env` file:

```
TOKEN_SECRET='your_secret_key_here'
```

Execute the following commands:

```
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

At this point, your API should be running at http://127.0.0.1:3001/.

If you want to migrate to MySQL/MariaDB, edit the database settings in the `.env`, file and also configure `src/config/database.js`.

For SQLite, the settings are:

```javascript
require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: './db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

For MySQL/MariaDB, the settings are:

```javascript
require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

Note that the settings starting with `process.env.` come from the `.env` file.

The user and password data for the seed files are:

- email = admin@email.com
- password = 123456

You can obtain the JWT token at the `/tokens`, route by sending the following JSON data:

```json
{
	"email": "admin@email.com",
	"password": "123456"
}
```

Headers:

```
Content-Type	application/json; charset=utf-8
```
