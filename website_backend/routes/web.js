const AuthController = require('../controller/AuthController');

function rest(app) {
    app.get('/',(req,res) => { return res.status(200).json({message:"Working"})});
    app.post('/login',AuthController().Login);
    app.post('/register',AuthController().Register);
}

module.exports = rest;