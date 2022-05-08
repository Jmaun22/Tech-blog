const { User } = require('../models');

const userData = [
    {
        id:1,
        username: joejoe,
        password: non,
    },
    {
        id:2,
        username: hohoe,
        password: yikes,
    },
    {
        id:3,
        username: luke,
        password: skywalker,
    },
    {
        id:4,
        username: jimmey,
        password: johns,
    },
    {
        id:5,
        username: darth,
        password: vader,
    },
    {
        id:6,
        username: yoda,
        password: eyeyy,
    },
];


const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers
