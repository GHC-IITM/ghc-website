const mongoose = require('mongoose');

const Team = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    teamname: {
        type: String,
        required: true,
    },
    homeUniversity: {
        type: String,
        required: true,
    },
    activemembers: {
        type: Number,
        required: true,
    },
    attendeventmembers: {
        type: Number,
        required: true,
    },
    teamrepresentetive: {
        type: String,
        required: true,
    },
    emailrepresentetive: {
        type: String,
        required: true,
    },
    numberrepresentetive: {
        type: Number,
        required: true,
    },
    teamlogo: {
        type: String,
        required: true,
    },
    officialteamname: {
        type: String,
        required: true,
    },
    teamaddress: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalcode: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Team', Team);