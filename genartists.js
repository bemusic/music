
var out = []
var already = {}

require('./index.json').songs.forEach(function(song) {
  var artist = song.alias_of || song.artist
  if (!already[artist] && artist !== 'flicknote') {
    out.push({ name: artist, url: song.artist_url })
    already[artist] = true
  }
})

require('fs').writeFileSync('artists.json', JSON.stringify(out, null, 4))
