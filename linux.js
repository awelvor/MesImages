const http = require('http');
const os = require('os');

let html = "";
html += "<!doctype html>";
html += '<html lang="fr">';
html += "<head>";
html += '<meta charset="utf-8">';
html += '<meta name="viewport" content="width=device-width, initial-scale=1">';
html += "<title>myPC</title>";
html += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">';
html += "</head>";

html += "<body>";
html += '<div class="container">';
html += "<h3>MyPC</h3>";
html += '<table class="table table-sm table-hover">';
html += "<tr><td>OS Platform</td><td>" + os.platform() + "</td></tr>";
html += "<tr><td>OS Type</td><td>" + os.type() + "</td></tr>";
html += "<tr><td>OS Release</td><td>" + os.release() + "</td></tr>";
html += "<tr><td>OS Architecture</td><td>" + os.arch() + "</td></tr>";
html += "<tr><td>OS Hostname</td><td>" + os.hostname() + "</td></tr>";
html += "<tr><td>OS Uptime (hours)</td><td>" + Math.floor(os.uptime() / (60 * 60)) + "</td></tr>";
html += "</table>";
html += "</div>";
html += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>"';
html += "</body>";

html += "</html>";

const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

// Define the port to listen on const PORT = 3000;
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
