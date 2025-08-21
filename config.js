const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~JR5jCRYL#cPG3NNV8_CdpR-1ysUCGBNgfhLxDMF0w2vJWgfg9nQ8'
};
