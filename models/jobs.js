
// const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
  
  const Jobs = sequelize.define('Jobs', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
     },
    jobtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    formattedLocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    snippit: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    salary: {
      type: DataTypes.DECIMAL
    },
    interested: {
      type: DataTypes.STRING
    },
    deadline: {
      type: DataTypes.DATEONLY
    },
    notes: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.STRING
    }
    // Other model options go here
  })

  return Jobs

};