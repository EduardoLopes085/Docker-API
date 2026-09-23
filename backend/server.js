import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
import 'dotenv/config';


const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

const conexao = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.get("/", (req, res)=>{
    res.status(200).send("minha api está rodando");
});

app.get("/produtos", async (req, res)=>{
    const [produtos] = await conexao.query("SELECT * FROM produtos"); 
    res.status(200).json(produtos);
});

app.listen(PORT, ()=>{
    console.log(`api rodando em http://localhost:${PORT}`);
})