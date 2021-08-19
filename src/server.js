import 'dotenv/config';
import express from 'express';
import mailRouter from './routes/mail';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/mail", mailRouter);

app.listen(3333, () => {
    console.log('listening on 3333')
})