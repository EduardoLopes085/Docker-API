
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [produtos, setProdutos] = useState([]);
  async function buscarProdutos() {
    const { data } = await axios.get("http://localhost:3000/produtos");
    setProdutos(data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
     <div className="loja">
      <header>
        <h1>Minha Loja</h1>
        <p>Confira nossos produtos</p>
      </header>
      <main className="vitrine">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <div className="imagem-produto">
              🛍️
            </div>

            <h2>{produto.nome}</h2>

            <p className="preco">
              R$ {Number(produto.preco).toFixed(2).replace('.', ',')}
            </p>

            <button>Comprar</button>
          </div>
        ))}
      </main>
     </div>
    </>
  )
}

export default App