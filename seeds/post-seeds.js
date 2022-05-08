const { Post } = require('../models');

const postData = [
    {
        title: "HTML Times",
        user_id: 1,
        content: 'there were good',
    },
    {
        title: "Remember CSS",
        user_id: 2,
        content: 'it makes things good',
    },

    {
        title: "HTML for days",
        user_id: 3,
        content: 'I learned html first',
    },

    {
        title: "NODE",
        user_id: 4,
        content: 'thats javascript outside of the brower',
    },

    {
        title: "data Structures",
        user_id: 5,
        content: 'maybe an array',
    },

    {
        title: "life in the fast lane",
        user_id: 6,
        content: 'how slow can you go',
    },


];


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;