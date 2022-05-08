const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");

class User extends Model {
    // set up a method to run on instance data (per user) to check passwords
};

User.init(
    { 
        // Finish the user model
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    },
    {
    hooks: {
        // set up beforeCreate lifecycle "hook"

        // beforeCreate: async () => {},
        beforeCreate: async (userData) => {
            userData.password = await bcrypt.hash(userData.password, 11);
            return userData
        },
        beforeUpdate: async (updateUserData) => {
            updateUserData.password = await bcrypt.hash(updateUserData.password, 11);
            return updateUserData;
        }
        // beforeUpdate: async () => {}
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "User"
    }
);

module.exports = User;