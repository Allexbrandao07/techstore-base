import { calcularEstoquePorCategoria, contarClientesAguardando } from '../utils/painel'
import { formatarPreco } from '../utils/formatarPreco'

// Página do dono da loja para acompanhar estoque, produtos sem preço e clientes aguardando
export default function Painel({ produtos, avisos }) {
  const categorias = calcularEstoquePorCategoria(produtos)
  const valorTotal = categorias.reduce((total, item) => total + item.valor, 0)
  const semPreco = produtos.filter((produto) => produto.price === undefined)
  const clientesAguardando = contarClientesAguardando(avisos)

  return (
    <section>
      <p className="sobretitulo">Área do lojista</p>
      <h1>Painel</h1>

      <h2>Dinheiro parado em estoque</h2>
      <p className="aviso">Quanto a loja receberia vendendo todo o estoque hoje, pelo preço atual.</p>
      <div className="tabela-moldura">
        <table className="tabela">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Unidades</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((item) => (
              <tr key={item.categoria}>
                <td>{item.categoria}</td>
                <td>{item.unidades}</td>
                <td>{formatarPreco(item.valor)}</td>
              </tr>
            ))}
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td></td>
              <td>
                <strong>{formatarPreco(valorTotal)}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Esperando preço do time de suprimentos</h2>
      <p className="aviso">Produtos com estoque separado que ainda não podem ser vendidos.</p>
      <div className="tabela-moldura">
        <table className="tabela">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Unidades</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {semPreco.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.title}</td>
                <td>{produto.category}</td>
                <td>{produto.estoque}</td>
                <td>
                  <span className="selo selo-alerta">Sem preço</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Clientes esperando produtos esgotados</h2>
      <div className="resumo">
        <p className="total">
          <span>Clientes aguardando aviso</span>
          <span>{clientesAguardando}</span>
        </p>
        <p className="aviso">Quem está esperando cada produto aparece na área interna de estoque.</p>
      </div>

      <h2>Lucro por categoria</h2>
      <p className="aviso">
        Não é possível calcular o lucro: a API não informa o custo dos produtos nem as vendas
        realizadas. Assim que esses dados existirem, o lucro pode ser exibido aqui.
      </p>
    </section>
  )
}
