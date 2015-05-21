
artists.json: index.json
	node genartists.js

index.json: .force
	bemuse-tools index

.force:
