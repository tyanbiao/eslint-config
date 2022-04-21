# @hyperbolajs/eslint-config

> wwwatson's personal eslint config

## Usage

### Install

Install `eslint` and `prettier`

```shell
$ npm install -D eslint prettier
```

Install `@hyperbolajs/eslint-config`  
```shell
$ npm install -D @hyperbolajs/eslint-config
```

### Edit `package.json`

```jsonc
{
    // ...
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config"
    }
}
```

Only broswer env

```jsonc
{
    // ...
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/broswer"
    }
}
```

Only node env

```jsonc
{
    // ...
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/node"
    }
}
```

### With TypeScript

Install dependencies

```shell
$ npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```jsonc
{
    // ...
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/ts"
    }
}
```