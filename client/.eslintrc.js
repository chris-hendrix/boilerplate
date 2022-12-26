module.exports = {
    'extends': [
        '../.eslintrc',
        'plugin:react/recommended'
    ],
    'root': true,
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': './tsconfig.json',
        'tsconfigRootDir': __dirname,
        'ecmaFeatures': { 'jsx': true }
    },
    'plugins': ['react'],
    'rules': {
        '@typescript-eslint/unbound-method': 'off'
    }
}
