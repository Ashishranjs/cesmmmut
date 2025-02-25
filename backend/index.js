import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({
    origin: "./.env"
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});