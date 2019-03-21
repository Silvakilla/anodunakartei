export default setAxiosConfig = (signedToken) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + signedToken
        }
    };
};