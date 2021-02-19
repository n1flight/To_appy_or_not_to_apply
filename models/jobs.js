
module.exports = function (sequelize, DataTypes) {
  
  const Jobs = sequelize.define('Jobs', {
    // Model attributes are defined here
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
    snippet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Interested: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }

    // Other model options go here
  })

  return Jobs

};