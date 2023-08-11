const { pathToFileURL } = require('url');
const path = require('path');
const sass = require('sass');

test("sass with url option", () => {
	const result = sass.compileString('@import "partial";', {
		style: 'compressed',
		url: pathToFileURL(path.join(__dirname, 'test.scss')),
	});

	expect(result.css).toBe("body{background:red}");
});
