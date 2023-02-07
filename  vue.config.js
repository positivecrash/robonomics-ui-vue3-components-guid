const path = require(`path`);

module.exports = {
    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                vue: path.resolve(`./node_modules/vue`)
            },
            extensions: ['.js','.jsx', '.css'] /* ~ */
        }
    },
    // publicPath: process.env.NODE_ENV === 'production'
    // ? 'http://test.robonomics.network/'
    // : '/'
};