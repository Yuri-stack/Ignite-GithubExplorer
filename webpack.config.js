const path = require('path')                            // forma de configurar caminhos independente do SO
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // informa qual o arquivo principal
    output: {                                           // informa a saida do arquivo que será gerado
        path: path.resolve(__dirname, 'dist'),          // informa a pasta
        filename: 'bundle.js'                           // informa o nome do arquivo que será gerado
    },
    resolve: {                                          // informa quais arquivos podem ser lidos
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {                       // como o app vai lidar quando importarmos cada tipo de arquivo
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}