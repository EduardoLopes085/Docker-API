import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

const conexao = mysql.createPool({
    host: "loja-db",
    user: "loja-app",
    password: "12345",
    database: "loja",
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