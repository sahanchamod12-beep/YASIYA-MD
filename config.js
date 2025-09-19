const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~xIAg2JDL#LQCd36TGOO7Em_IMYNpyD82nQx6lF4JPjOfMb-VR4H4'
};
