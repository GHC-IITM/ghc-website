const AuthController = require('../controller/AuthController');
const TeamController = require('../controller/TeamController');
const ContactController = require('../controller/ContactController');

function rest(app) {
    app.get('/', (req, res) => { return res.status(200).json({ message: "Working" }) });
    app.post('/login', AuthController().Login);
    app.post('/register', AuthController().Register);
    app.post('/me', AuthController().Me);
    app.post('/editteam', TeamController().Edit);
    app.post('/contact', ContactController().ContactUs);
}

module.exports = rest;