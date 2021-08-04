const { createServer } = require('http');
const path = require('path');
const fs = require('fs');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;

		if (pathname === '/robots.txt') {
			const publicFolder = path.join(__dirname, '/public');
			const domainFolder = path.join(publicFolder, req.headers.host);
			const robotsFile = path.join(domainFolder, pathname);

			// Prevent hostname manipulation to browse outside of public folder
			// Check if file exists
			const relative = path.relative(publicFolder, domainFolder);

			if (
				relative &&
				!relative.startsWith('..') &&
				!path.isAbsolute(relative) &&
				fs.existsSync(robotsFile)
			) {
				//found a domain specific robot.txt serving that instead of the default
				app.serveStatic(req, res, robotsFile);
			} else {
				//handle as an nextjs request
				handle(parsedUrl, req);
			}
		}
		else {
			if (parsedUrl.href == '/') {
				//console.log(req, res, parsedUrl)
			}

			handle(req, res, parsedUrl);
		}
	}).listen(3000, () => {
		console.log(`> Ready on port 3000 http://localhost:3000`);
	});
});
