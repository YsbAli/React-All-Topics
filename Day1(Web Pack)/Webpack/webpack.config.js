const path = require('path')    //importing from node js

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve("./", "build"),                     //folder name ,,,, (".") it represent Current directory,,,("build") -->represent the folder name
        filename: "bundle.js"               //file
    },
    // mode:'development'  
    mode:'development',  
     module: {
        rules: [
          { test: /\.css$/, use: ['style-loader ' ,'css-loader'] },
        //   {test: /\.jpg$/, use:['image-loader']}                  // it is for image loader but in the name of 'image loader' we have to write the name of that particuler name we have to just google it or search into webpack website
        ],
      }, 
   
}