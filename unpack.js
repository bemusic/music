var fs = require('fs')
var cp = require('child_process')
var dir = process.argv[2]
var bufs = { }

var data = JSON.parse(fs.readFileSync(dir + '/assets/metadata.json', 'utf8'))
data.files.filter(isOgg).forEach(function(file) {
  var name = file.name
  var ref = file.ref
  var buffer = getBuffer(data.refs[ref[0]].path).slice(ref[1] + 14, ref[2] + 14)
  fs.writeFileSync(dir + '/' + name, buffer)
  cp.execFileSync('sox/sox', [
      dir + '/' + name,
      dir + '/' + name.replace('.ogg', '.wav')])
  fs.unlinkSync(dir + '/' + name)
})

function isOgg(file) {
  return file.name.match(/\.ogg$/i)
}

function getBuffer(name) {
  if (bufs[name]) return bufs[name]
  bufs[name] = fs.readFileSync(dir + '/assets/' + name)
  console.log('Reading', name)
  return bufs[name]
}
