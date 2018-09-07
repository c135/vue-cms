# 学习vue模块化开发

## node 以及webpack环境

```bash
npm init -y
# 下载 webpack 和 webpack-cli
npm i -D webpack webpack-cli

```
- webpack.config.js配置文件书写
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack =require('webpack');

module.exports = {
    mode: 'production',
    entry:{
        // app:'./src/index.js',
        // print:'./src/print.js'
        app:'./src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        hot:true,
        port: 9000

    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Hot Module Replacement"
        })
        ,new CleanWebpackPlugin(['dist'])
        ,new webpack.NamedModulesPlugin()
        ,new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,use:['file-loader']
            },
            {test: /\.(woff|woff2|eot|ttf|otf)$/,use: ['file-loader']
       }
        ]
    }
};
```

- 安装webpack-loader与插件
```bash
# 安装css loader
npm install --save-dev style-loader css-loader

#安装sass loader 
npm install sass-loader node-sass webpack --save-dev

# 加载图片loader 
npm install --save-dev file-loader

#安装urlloader
npm i -D url-loader

#安装vue-loader
npm i -D vue-loader

# htm插件
npm install --save-dev html-webpack-plugin

#清理 /dist 文件夹
npm install clean-webpack-plugin --save-dev

#安装vueloader
npm i vue-loader vue-template-compiler -D

#安装babel
npm install -D babel-loader@7 babel-core
npm i -D   babel-plugin-transform-runtime babel-preset-env babel-preset-stage-0
# 配置.babelrc
```

- 配置使用 source map 方便debug
```js
//webpack.config.js
  devtool: 'inline-source-map'
```

- 安装npm install --save-dev webpack-dev-server
```bash
npm install --save-dev webpack-dev-server
```
-- 配置 webpack-dev-server
```js
//webpack.config.js
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        hot:true,
        port: 9000

    },
```

```js
// package.json
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "dev": "webpack-dev-server --open"
  }
```

- 启用了更新
```js
// webpack.config.js
  const webpack = require('webpack');;
  module.exports = {
        devServer: {
            contentBase: './dist',
         hot: true
          },
 plugins:[
        new webpack.NamedModulesPlugin()
        ,new webpack.HotModuleReplacementPlugin()
    ]
}
```

## mint-ui
```bash
npm i -S mint-ui
npm install babel-plugin-component -D
# 相应的配置请看官网
```




