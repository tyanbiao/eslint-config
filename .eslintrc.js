module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeature: {
            jsx: true,
        },
    },
    env: {
        es2021: true,
        node: true,
        browser: true,
        commonjs: true,
        jest: true,
    },
    extends: ['plugin:prettier/recommended'],
    rules: {
        semi: [
            'error',
            'never',
            {
                beforeStatementContinuationChars: 'always',
            },
        ],
    },
}
