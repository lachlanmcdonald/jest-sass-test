const { pathToFileURL } = require('url');
const path = require('path');
const sass = require('sass');

const result = sass.compileString('@import "partial";', {
	style: 'compressed',
	url: pathToFileURL(path.join(__dirname, 'test.scss')),
});

console.log(result.css);