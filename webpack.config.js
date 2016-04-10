module.exports = {
    entry: './src/popup.jsx',

    output: {
        filename: 'popup.js',
        publicPath: ''
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel?presets[]=es2015&presets[]=react'
        }]
    }
};
