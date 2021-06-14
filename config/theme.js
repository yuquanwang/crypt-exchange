const fs = require('fs')
const path = require('path')
const lessToJs =require('less-vars-to-js') 
 
// Read the less file in as string
const paletteLess = fs.readFileSync(path.resolve(__dirname, '../src/style.less'), 'utf8')

// Pass in file contents
const palette = lessToJs(paletteLess, {resolveVariables: true})

// write to json
fs.writeFileSync(path.resolve(__dirname, '../src/theme.json'), JSON.stringify(palette))