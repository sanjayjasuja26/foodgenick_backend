module.exports = (sequelize, DataTypes) => {

    const foodgenicContentModel = sequelize.define("foodgienic_contents", {
        home_page_sections: {
            type: DataTypes.STRING,
            allowNull: false
        },
        about_page_sections: {
            type: DataTypes.STRING
            // allowNull defaults to true   
        },
        service_page_sections: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price_page_sections: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        partners_page_sections: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        blog_page_sections: {
            type: DataTypes.STRING
           ,allowNull: true
        }

    })
    return foodgenicContentModel
}