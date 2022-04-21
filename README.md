# @hyperbolajs/eslint-config

> wwwatson's personal eslint config

## Usage

### Install

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

Using with TypeScript

```jsonc
{
    // ...
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/ts"
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