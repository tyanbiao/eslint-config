const eslintrc = require('./.eslintrc.js')
eslintrc.env = {
    ...eslintrc.env,
    node: false,
    commonjs: false,
}
module.exports = eslintrc
