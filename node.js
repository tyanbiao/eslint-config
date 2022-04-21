const eslintrc = require('./.eslintrs.js')

eslintrc.parserOptions = {
    ecmaVersion: 2022,
    sourceType: 'module',
}

eslintrc.env = {
    es2021: true,
    node: true,
    commonjs: true,
}

module.exports = eslintrc
