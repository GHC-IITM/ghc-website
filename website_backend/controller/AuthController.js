const Team = require('../models/Team');
const bcrypt = require('bcrypt');
const OBBS = require('../services/OBBS');

function AuthController() {
    return {
        async Login(req, res) {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: 'Send All Details' });
            }
            try {
                const team_exist = await Team.findOne({ email: email });
                if (!team_exist) {
                    return res.status(400).json({ message: 'Team Not Found, Please Register.' });
                } else if (team_exist.email === email) {
                    const is_password_correct = await bcrypt.compare(password, team_exist.password).then((data) => {
                        return data;
                    }).catch(err => {
                        return res.status(403).json({ message: 'Invalid password' });
                    });
                    if (is_password_correct) {
                        return res.status(200).json(OBBS(team_exist));
                    }
                    return res.status(500).json({ message: 'Internal Server Error' });
                }
            } catch (error) {
                return res.status(500).json({ message: 'Internal Server Error' })
            }
        },
        async Register(req, res) {
            const { email, password, teamname, homeUniversity, activemembers, attendeventmembers, teamrepresentetive, emailrepresentetive, numberrepresentetive, teamlogo, officialteamname, teamaddress, country, postalcode } = req.body;
            if (!email || !password || !teamname || !homeUniversity || !activemembers || !attendeventmembers || !teamrepresentetive || !emailrepresentetive || !numberrepresentetive || !teamlogo || !officialteamname || !teamaddress || !country || !postalcode) {
                return res.status(400).json({ message: 'Send All Details' });
            }
            try {
                const team_exist = await Team.findOne({ email: email });
                if (team_exist) {
                    return res.status(400).json({ message: 'Team Already Exists' });
                } else {
                    try {
                        const hashed_password = await bcrypt.hash(password, 10).then((data) => {
                            return data;
                        }).catch(err => {
                            throw new Error(err);
                        });
                        await Team.create({ email, password: hashed_password, teamname, homeUniversity, activemembers, attendeventmembers, teamrepresentetive, emailrepresentetive, numberrepresentetive, teamlogo, officialteamname, teamaddress, country, postalcode }).then((result) => {
                            return res.status(200).json({ message: 'Created!' });
                        }).catch(error => {
                            return res.status(500).json({ message: 'Internal Server Error' })
                        });
                    } catch (error) {
                        return res.status(500).json({ message: 'Internal Server Error' })
                    }
                }
            } catch (error) {
                return res.status(500).json({ message: 'Internal Server Error' })
            }
        }
    }
}

module.exports = AuthController;