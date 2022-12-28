const dotenv = require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'uxl0eXxaHY6NXLBZIpi5',
  database: process.env.MYSQL_DATABASE || 'railway',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: process.env.MYSQL_PORT || 7666,
  dialect: process.env.DIALECT || 'mysql'

}
