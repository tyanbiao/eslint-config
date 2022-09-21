const eslintrc = require('./ts')
eslintrc.env = {
    ...eslintrc.env,
    browser: false,
}

eslintrc.parserOptions.ecmaFeature = {
    ...eslintrc.parserOptions.ecmaFeature,
    jsx: false,
}
module.exports = eslintrc
