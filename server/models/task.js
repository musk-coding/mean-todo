module.exports = function(sequelize, DataTypes) {
  return sequelize.define("tasks", {
    task_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    user_id: {
      type: DataTypes.INTEGER
    },
    task_description: {
      type: DataTypes.STRING
    }
  })
}