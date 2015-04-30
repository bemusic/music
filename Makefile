
artists.json: index.json
	node genartists.js

index.json: .force
	bemusepack index

.force:
