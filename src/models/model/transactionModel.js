module.exports = (sequelize, DataTypes) => {

    const transactionInfo = sequelize.define("transaction", {
            paymentId: { type: DataTypes.STRING },
            userId: { type: DataTypes.INTEGER },
            amount: { type: DataTypes.INTEGER },
            currency: { type: DataTypes.STRING },
            method: { type: DataTypes.STRING },
            orderId: { type: DataTypes.STRING },
            contactNumber: { type: DataTypes.STRING },
            errorCode: { type: DataTypes.STRING },
            errorDescription: { type: DataTypes.STRING },
            errorrReason: { type: DataTypes.STRING },
            subscriptionType: { type: DataTypes.STRING },
    })
    return transactionInfo
}