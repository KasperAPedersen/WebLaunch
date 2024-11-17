const usePort = 443;

import Express from 'npm:express';
import * as https from 'node:https';
import * as fs from 'node:fs';

const app = new Express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/weblaunch.dk/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/weblaunch.dk/fullchain.pem')
};

app.enable('trust proxy');

app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production' && !req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});

app.use(Express.static('Public'));

https.createServer(options, app).listen(usePort, () => {
    console.log('HTTPS server running on port ' + usePort);
});