# DOCTOR API

# generate model
- npx sequelize-cli model:generate --name Record --attributes clientId:integer,doctorId:integer,description:string

- npx sequelize-cli db:migrate:undo
- npx sequelize-cli db:migrate
- npx sequelize-cli db:seed:all

# Resources
- clients/patients
- doctors
- records

