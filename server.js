// You need the following required:
// express
const express = require('express');
const session = require('express-session');

// path
const path = require('path');

// express-handlebars
const express_Handlebars = require('express-handlebars');

// helpers (if you are putting timestamps on posts)
const helper = require('./utils/helper')

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    // For password sessions
    secret: 'secrets',
    cookie: {},
    resave: false,
    saveuninitalized: true,
    store: new SequelizeStore({
      db: sequelize
    })

};

app.use(session(sess));


const hbs = exphbs.create({ helper });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use(require('./controllers'));


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
