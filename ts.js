const eslintrc = require('./.eslintrc.js')

eslintrc.root = true
eslintrc.parser = '@typescript-eslint/parser'
eslintrc.plugins = ['@typescript-eslint']
eslintrc.extends = [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
]
eslintrc.rules = {
    ...eslintrc.rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
        'warn',
        {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
        },
    ],
}
module.exports = eslintrc
