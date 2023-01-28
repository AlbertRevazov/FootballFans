module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
      filename: './build/client.js',
    },
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
  
    module: {
      loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
    }
  };