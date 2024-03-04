# api
http://localhost:3000/api-docs/
https://github.com/kapit4n/denti-code
![Dashboard](https://raw.githubusercontent.com/kapit4n/denti-code-server/master/screenshots/swagger.png)


# generate model
- npx sequelize-cli model:generate --name Record --attributes clientId:integer,doctorId:integer,description:string

- npx sequelize-cli db:migrate:undo
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all

# Install
- npm install

# RUN
- npm run start
