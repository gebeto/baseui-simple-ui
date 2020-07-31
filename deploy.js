const ghpages = require("gh-pages");


ghpages.publish('dist', {
	dest: 'dist',
	branch: 'gh-pages',
}, () => {
	console.log("Succesfully deployed!");
});
