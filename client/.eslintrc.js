module.exports = {
    'extends': [
        '../.eslintrc',
        'plugin:react/recommended',
        'plugin:cypress/recommended'
    ],
    'env': {
        'cypress/globals': true
    },
    'root': true,
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': './tsconfig.json',
        'tsconfigRootDir': __dirname,
        'ecmaFeatures': { 'jsx': true }
    },
    'plugins': ['react'],
    'rules': {}
}
