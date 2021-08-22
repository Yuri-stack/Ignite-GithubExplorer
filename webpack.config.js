const path = require('path')                            // forma de configurar caminhos independente do SO
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
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
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {                                           // como o app vai lidar quando importarmos cada tipo de arquivo
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}