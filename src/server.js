import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {return res.send('ok')});

app.listen(3333, () => {
    console.log('listening on 3333')
})