let setAxiosConfig = (signedToken) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + signedToken
        }
    };
};

module.exports = {
    setAxiosConfig
};