module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ],
  "extends": [
    "eslint:recommended",
    "google",
    "prettier"
  ],
    "rules": {
      "prettier/prettier": "error"
    }

