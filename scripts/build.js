const fs = require('fs')
const path = require('path')
const Zip = require('node-zip')

const name = 'word-counts'

const zip = new Zip()

const files = [
  'icon-128.png',
  'main.js',
  'page.js',
  'page.css',
  'manifest.json'
]
files.forEach(file => {
  zip.folder(name).file(file, fs.readFileSync(path.join(__dirname, '../', file)))
})

zip.folder(name).file('key.pem', fs.readFileSync(path.join(__dirname, '../', 'chrome-word-count.pem')))

const data = zip.generate({base64: false, compression: 'DEFLATE'})

if (!fs.existsSync('build')) {
  fs.mkdirSync('build')
}
fs.writeFileSync(`build/${name}.zip`, data, 'binary')
