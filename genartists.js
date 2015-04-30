
var out = []
var already = {}

require('./index.json').songs.forEach(function(song) {
  if (!already[song.artist] && song.artist !== 'flicknote') {
    out.push({ name: song.artist, url: song.artist_url })
    already[song.artist] = true
  }
})

require('fs').writeFileSync('artists.json', JSON.stringify(out, null, 4))
