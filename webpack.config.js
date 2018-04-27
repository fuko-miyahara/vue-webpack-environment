const glob = require("glob");

const javaScriptBundlePath = __dirname + "/../";

var entries = {}
glob.sync("./src/js/**/*.main.js").map(function(file){
  let key = file.match(/[a-z0-9_]*.main.js/i)[0].replace('.main.js', '');
  // {key:value}のObject（連想配列形式）を生成
  entries["webpack/src/javascript/" + key] = file;
});

module.exports = {
    entry: entries,
    output: {
        path: javaScriptBundlePath,
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.js",
            "vuex$": "vuex/dist/vuex.js"
        }
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.vue$/,
                loader: "eslint-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "eslint-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    "scss": "vue-style-loader!css-loader!sass-loader",
                    "sass": "vue-style-loader!css-loader!sass-loader?indentedSyntax"
                }
            },
            {
                test: /\.scss?$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.scss?$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    // 本番環境では、source-mapは、出さない
    devtool: process.env.NODE_ENV !== "production" ? "inline-source-map" : ""
};

