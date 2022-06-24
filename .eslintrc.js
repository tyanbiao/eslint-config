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
        // 下划线开头的变量不被警告
        'no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
    },
}
