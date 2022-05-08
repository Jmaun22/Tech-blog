const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init({
    // finish this Comment Model

    text_comment: {
        type: DataTypes.STRING,
        
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            module: 'post',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    
},

sequelize,
freezeTableName: true,
underscored: true,
modelName: 'comment'
    

});

module.exports = Comment;