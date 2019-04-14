/**
 * Usage: sleep(2000).then(() => {do something})
 * @param ms
 * @returns {Promise<any>}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

module.exports = sleep;