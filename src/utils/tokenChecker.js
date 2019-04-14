const jwt = require('jsonwebtoken');
const axios = require('axios');

function checkToken (token, key) {
    let information = jwt.verify(token, key, (err, decoded) => {
        if(err) {
            return err;
        }

        return decoded
    });

    console.log(information.username);
    // axios request with username to database
    // if true
    // return true for check

    if(information !== undefined) {
        return true;
    }
}

module.exports = checkToken;