module.exports = (sequelize, DataTypes) => {

    const Blogs = sequelize.define("blog", {
            image: { type: DataTypes.STRING },
            title: { type: DataTypes.STRING },
            description: { type: DataTypes.STRING },
    
           

    })
    return Blogs
}