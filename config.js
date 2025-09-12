const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~a4QRjDBZ#3sC05yQlMa9sSvj6uef1uKHnYMp45hq-zSP07I4rvjc'
};
