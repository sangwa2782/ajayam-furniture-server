import express from 'express';
import Connection from './config/db.js';
import cors from 'cors';
import galleryRoutes from './routes/gallery.js';
// import furnitureRoutes from './routes/furnitureRoutes.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();
// API Routes
app.use(cors());

app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', galleryRoutes);
// app.use('/api/v2', furnitureRoutes);

app.use(express.static("public/upload"));

dotenv.config();
const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => {
    console.log(`Localhost Connected Successfully on the PORT :${PORT}`);
});