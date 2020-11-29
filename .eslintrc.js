module.exports = {
    extends: [ 'airbnb-base' ],
    rules  : {
        indent                             : [ 'error', 4 ],
        eqeqeq                             : 'off',
        camelcase                          : [ 0, { properties: 'never' }],
        'no-console'                       : process.env.ENV === 'production' ? 'error' : 'off',
        'func-names'                       : 'off',
        'consistent-return'                : 'off',
        'key-spacing'                      : [ 'error', { align: 'colon' }],
        'no-param-reassign'                : 'off',
        'no-plusplus'                      : 'off',
        'default-case'                     : 'off',
        'no-underscore-dangle'             : 'off',
        'brace-style'                      : 'off',
        'no-nested-ternary'                : 'off',
        'no-await-in-loop'                 : 'off',
        'import/prefer-default-export'     : 'off',
        'global-require'                   : 'off',
        'import/no-dynamic-require'        : 'off',
        'import/no-extraneous-dependencies': [ 'error', { devDependencies: true }],
        'object-curly-spacing'             : [
            2,
            'always',
            {
                objectsInObjects: true,
                arraysInObjects : true,
            },
        ],

        'array-bracket-spacing': [
            'error',
            'always',
            {
                objectsInArrays: false,
                arraysInArrays : true,
            },
        ],
    },
    env: {
        node : true,
        es6  : true,
        mocha: true,
    },
};
