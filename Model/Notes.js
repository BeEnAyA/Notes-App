module.exports=(sequelize,DataTypes)=>{
    const Notes = sequelize.define("notes", {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });

      return Notes;
}