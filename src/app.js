/**
 * Test to proove that requires only
 * evaluate once.
 */
module.exports = function () {
    return {
        count1: require('./counter.js'),
        count2: require('./counter.js')
    };
};
