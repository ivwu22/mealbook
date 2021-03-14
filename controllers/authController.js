const passport = require('../config/ppConfig');
const db = require('../models');

function getSignUpPage(req, res) {
    res.render('auth/signup');
};

function getLogInPage(req, res) {
    res.render('auth/login');
};

async function signUpUser(req, res) {
    try{
        // find or create the user
        const [user, created] = await db.user.findOrCreate({
            where: { email: req.body.email },
            defaults: {
            name: req.body.name,
            password: req.body.password
            }
        })
        if (created) {
            // success
            passport.authenticate('local', {
                successRedirect: '/user/dashboard',
                successFlash: 'Account created and user logged in!'
            })(req, res)
        } else {
            // user already exists, so we redirect
            req.flash('error', 'Email already exists')
            res.redirect('/auth/signup')
        }
    } catch(error){
        req.flash('error', error.message)
        res.redirect('/auth/signup')
    }
};

function logOutUser(req, res) {
    // .logout() is added to the req object by passport
    req.logout();
    req.flash('success', 'You have logged out!');
    res.redirect('/');
};

module.exports = {
    getSignUpPage,
    getLogInPage,
    signUpUser,
    logOutUser
};