const nodeExternals = require("webpack-node-externals")
const path = require("path")

const typicalReact = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    }
  ]
}

const clientConfig = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "compiled"),
    filename: "main.js"
  },
  mode: "development",
  module: typicalReact
}

const serverConfig = {
  entry: "./src/api/app.ts",
  output: {
    path: __dirname,
    filename: "compiled/server-compiled.js"
  },
  externals: [nodeExternals()],
  target: "node",
  mode: "production",
  module: typicalReact
}

module.exports = [clientConfig, serverConfig]
