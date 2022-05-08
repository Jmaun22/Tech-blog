const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    try {
        const postData = await Post.findAll({

        });
        // serilaing the data for the template
        const post = postData.map((post) => post.get({ plain: true}));

        // pass data and session into template
        res.render('homepage', {
            projects,
            loggin_in: req.session.loggin_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/new", withAuth, (req, res) => {
// for showing new posts to the user
})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
})

module.exports = router;