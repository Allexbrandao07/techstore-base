import { useState } from 'react'
import { Link } from 'react-router'
import SugestaoItem from '../components/SugestaoItem'
import { agruparItens, calcularTotal } from '../utils/carrinho'
import { validarCupom } from '../utils/cupons'
import { formatarPreco } from '../utils/formatarPreco'

export default function Carrinho({ carrinho, produtos, clienteAtual, onAdicionar, onRemover }) {
  const [codigoCupom, setCodigoCupom] = useState('')
  const [cupomAplicado, setCupomAplicado] = useState(null)

  const itens = agruparItens(carrinho)
  const total = calcularTotal(carrinho)

  // O cupom é validado de novo sempre que o cliente muda, para o desconto não passar
  // de um cliente para outro no mesmo computador
  const resultadoCupom = cupomAplicado !== null ? validarCupom(cupomAplicado, clienteAtual) : null
  const desconto = resultadoCupom && resultadoCupom.valido ? resultadoCupom.desconto : 0
  const totalComDesconto = total * (1 - desconto)

  const sugestoes = produtos
    .filter((produto) => !carrinho.find((item) => item.id === produto.id))
    .filter((produto) => produto.price !== undefined)
    .slice(0, 3)

  function aplicarCupom(evento) {
    evento.preventDefault()
    setCupomAplicado(codigoCupom)
  }

  if (carrinho.length === 0) {
    return (
      <section>
        <h1>Carrinho</h1>
        <div className="estado-vazio">
          <p>Seu carrinho está vazio.</p>
          <Link to="/" className="botao botao-secundario">
            Ver produtos
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h1>Carrinho</h1>

      <div className="carrinho-layout">
        <ul className="lista-carrinho">
          {itens.map((item) => (
            <li key={item.produto.id} className="item-carrinho">
              <div className="item-imagem-moldura">
                <img src={item.produto.image} alt={item.produto.title} />
              </div>
              <div className="item-info">
                <p className="item-titulo">{item.produto.title}</p>
                <p className="item-preco">{formatarPreco(item.produto.price)}</p>
              </div>
              <span className="item-quantidade">{item.quantidade} un.</span>
              <button className="botao-texto" onClick={() => onRemover(item.produto.id)}>
                Remover 1
              </button>
            </li>
          ))}
        </ul>

        <aside className="resumo">
          <h2 className="resumo-titulo">Resumo do pedido</h2>

          <form className="cupom" onSubmit={aplicarCupom}>
            <label htmlFor="cupom" className="rotulo">
              Cupom de desconto
            </label>
            <div className="cupom-campo">
              <input
                id="cupom"
                value={codigoCupom}
                onChange={(evento) => setCodigoCupom(evento.target.value)}
                placeholder="Digite o código"
              />
              <button className="botao botao-secundario">Aplicar</button>
            </div>
            {resultadoCupom && (
              <p className="mensagem-cupom">
                {resultadoCupom.valido ? 'Cupom aplicado!' : resultadoCupom.mensagem}
              </p>
            )}
          </form>

          {desconto > 0 && (
            <p className="resumo-linha">
              <span>Desconto</span>
              <span>{desconto * 100}%</span>
            </p>
          )}
          <p className="total">
            <span>Total</span>
            <span>{formatarPreco(totalComDesconto)}</span>
          </p>
        </aside>
      </div>

      <h2>Você também pode gostar</h2>
      <div className="sugestoes">
        {sugestoes.map((produto) => (
          <SugestaoItem key={produto.id} produto={produto} onAdicionar={onAdicionar} />
        ))}
      </div>
    </section>
  )
}
