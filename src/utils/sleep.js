/**
 * Usage: sleep(2000).then(() => {do something})
 * @param ms
 * @returns {Promise<any>}
 */
export default function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}