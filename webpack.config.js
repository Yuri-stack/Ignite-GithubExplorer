const path = require('path')    // forma de configurar caminhos independente do SO 

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // informa qual o arquivo principal
    output: {                                           // informa a saida do arquivo que será gerado
        path: path.resolve(__dirname, 'dist'),          // informa a pasta
        filename: 'bundle.js'                           // informa o nome do arquivo que será gerado
    },
    resolve: {                                          // informa quais arquivos podem ser lidos
        extensions: ['.js', '.jsx']
    },
    module: {   // como o app vai lidar quando importarmos cada tipo de arquivo
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}