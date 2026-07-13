const home = (req, res) => {
    res.render("home.ejs")
}

const showSignUpForm = (req, res) => {
    res.render("auth/sign-up.ejs")
};

module.exports = {
    home,
    showSignUpForm,
}
