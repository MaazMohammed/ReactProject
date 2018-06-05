module.exports = {
    entry: __dirname+'/src/index.js',
    output: {
      path: __dirname,
      filename: 'dest/bundle.js'
    },
    devServer: {
      inline:true,
      port: 8080
    },
    module:{
      loaders:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015','react','stage-2']
          }
        },
        {
          test: /\.json$/,
          exclude: /node_modules/,
          loader: 'json-loader'
        },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
          }
      ]
    }
  
  }
  