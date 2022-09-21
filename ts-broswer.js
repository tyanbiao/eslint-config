const eslintrc = require('./ts')
eslintrc.env = {
    ...eslintrc.env,
    node: false,
    commonjs: false,
}
module.exports = eslintrc
