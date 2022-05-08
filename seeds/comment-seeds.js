
const { Comment } = require('../models');

const commentData = [
    {
        text_comment: 'yo yoy oyo y',
        post_id: 1,
        user_id: 1


    },
    {
        text_comment: 'html is cool',
        post_id: 2,
        user_id: 2


    },
    {
        text_comment: 'css is pretty coool too',
        post_id: 3,
        user_id: 3


    },
    {
        text_comment: 'nahh javascript is better',
        post_id: 4,
        user_id: 4


    },
    {
        text_comment: 'java is the best',
        post_id: 5,
        user_id: 5


    }

];

const seedComments = () => Comment.bulckCreate(commentData);

module.exports = seedComments;
