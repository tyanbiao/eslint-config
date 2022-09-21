const eslintrc = require('./ts-broswer')
eslintrc.extends = [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    ...eslintrc.extends,
]
module.exports = eslintrc
