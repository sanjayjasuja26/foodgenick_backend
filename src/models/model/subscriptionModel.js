module.exports = (sequelize, DataTypes) => {

    const subscription = sequelize.define("subscription", {
            type: { type: DataTypes.STRING },
          
           
    })
    return subscription
}