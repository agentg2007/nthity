const path = require("path")

const common = {
    devtool: "eval-source-map",
    mode: "development",
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(?:ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
        },
    },
    node: {
        __filename: false,
        __dirname: false,
    },
}
module.exports = [{
    ...common,
    target: "node",
    entry: {
        server: "./src/server/index.ts"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
}, {
    ...common,
    target: "web",
    entry: {
        app: {
            import: "./src/ui/index.tsx",
            dependOn: [
                "react"
            ]
        },
        react: ["react", "react-dom"],
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].js"
    },
    optimization: {
        runtimeChunk: {
            name: "runtime"
        }
    },
}]