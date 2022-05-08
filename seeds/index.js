const seedComments = require('./comment-seeds');
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

const sequelize = require('../config/config');


// seeding all 

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced');

    await seedComments();
    console.log('comments seeded');

    await seedUsers();
    console.log('users seeded');

    await seedPosts(); 
    console.log('Posts seeded');

    process.exit(0);
}

seedAll();