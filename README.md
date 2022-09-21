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

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config"
    }
}
```

Only broswer env

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/broswer"
    }
}
```

Only node env

```json
{
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

Base

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/ts"
    },
    "parserOptions": {
      "tsconfigRootDir": ".",
      "project": "tsconfig.json"
    }
}
```

Only node 

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/ts-node"
    },
}
```

Only braswer 

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/ts-broswer"
    },
}
```

### With React

install dependencies

```
npm install -D eslint-plugin-react
```

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/jsx"
    },
}
```

TypeScript

```json
{
    "eslintConfig": {
        "extends": "@hyperbolajs/eslint-config/tsx"
    },
}
```