import Express from 'npm:express';
import * as https from 'node:https';
import * as http from 'node:http';
import * as fs from 'node:fs';

const app = new Express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/weblaunch.dk/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/weblaunch.dk/fullchain.pem')
};

app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.protocol === 'http') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

app.use(Express.static('public'));

https.createServer(options, app).listen(443, () => {
    console.log('HTTPS server running on port 443');
});

http.createServer(function(req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80, function(err) {
  console.log("Node.js Express HTTPS Server Listening on Port 80");
});