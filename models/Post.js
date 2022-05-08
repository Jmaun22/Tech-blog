// Finish the rest of this model

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {}

Post.init({
    title: {
        type: DataType.STRING
    },
    user_id: {
        type: DataTypes.INTEGER,
        refrences: {
            model: 'user',
            key: 'id'
        }
    },
    content: {

        type: DataTypes.TEXT

    },
    
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'

        

});

module.exports = Post;
    // finish this POST model 