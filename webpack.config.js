module.exports = {
    entry: "./views/home.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};