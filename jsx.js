const eslintrc = require('./broswer')
eslintrc.extends = [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    ...eslintrc.extends,
]
module.exports = eslintrc
