const { Sequelize, Model, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://carlosd76:USER@localhost:5432/wiki', {logging: false});

//const sequelize = new Sequelize();

//-- Page Model
class Page extends Sequelize.Model {}
Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, { sequelize: db, modelName: 'page' });


//-- User Model
class User extends Sequelize.Model {}
User.init({
  name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
    }
}, { sequelize: db, modelName: 'user' });

module.exports = {
  Page: Page,
  User: User,
  db: db
};