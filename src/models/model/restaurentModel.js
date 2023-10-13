module.exports = (sequelize, DataTypes) => {

        const Restaurent = sequelize.define("restaurent", {
                firstname: { type: DataTypes.STRING },
                lastName: { type: DataTypes.STRING },
                email: { type: DataTypes.STRING },
                phone: { type: DataTypes.STRING },
                restaurantname: { type: DataTypes.STRING },
                companyName: { type: DataTypes.STRING },
                gst: { type: DataTypes.STRING },
                kitchenArea: { type: DataTypes.STRING },
                streetAddress: { type: DataTypes.STRING },
                city: { type: DataTypes.STRING },
                state: { type: DataTypes.STRING },
                postalZipCode: { type: DataTypes.STRING },
                country: { type: DataTypes.STRING },
                password: { type: DataTypes.STRING },
                description: { type: DataTypes.STRING },
                image: { type: DataTypes.STRING },
                isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },

        })
        return Restaurent
}