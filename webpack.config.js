module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    devtool: 'source-map'
}
