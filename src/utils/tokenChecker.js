import jwt from 'jsonwebtoken';
import axios from 'axios';

export default function checkToken (token, key) {
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