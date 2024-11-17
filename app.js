import Express from 'npm:express';
const app = new Express();

app.use(Express.static('Public'));

app.listen(3000, (e) => {
    console.log(e ? e.message : 'Listening on port 3000');
});