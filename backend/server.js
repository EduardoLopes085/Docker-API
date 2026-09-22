import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'


const port = 3000;
const app = express();
app.use(express.json())
app.use(cors())

const conexao = mysql.createPool({
    host: "loja-db",
    user: "loja-app",
    password: "",
    database: "",
})

app.get("/", (req, res)=>{
    res.status(200).send("minha api está rodando")
});

app.get("/produtos", (req, res)=>{
    res.status(200).json()
});

app.listen(port, ()=>{
    console.log(`api rodando em http://localhost:${port}`)
});

