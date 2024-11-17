const usePort = 443;

import Express from 'npm:express';
import * as https from 'node:https';
import * as fs from 'node:fs';

const app = new Express();

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

app.use(Express.static('Public'));

https.createServer(options, app).listen(usePort, () => {
    console.log('HTTPS server running on port ' + usePort);
});