const AuthController = require('../controller/AuthController');
const TeamController = require('../controller/TeamController');

function rest(app) {
    app.get('/',(req,res) => { return res.status(200).json({message:"Working"})});
    app.post('/login',AuthController().Login);
    app.post('/register',AuthController().Register);
    app.post('/editteam',TeamController().Edit);
}

module.exports = rest;