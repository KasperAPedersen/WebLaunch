import Express from 'npm:express';
import https from 'npm:https';
import fs from 'npm:fs';

const app = new Express();

app.use(Express.static('Public'));

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(80, () => {
    console.log('Server started on https://localhost:80');
});