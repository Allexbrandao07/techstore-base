// Cálculos do painel do lojista

// Dinheiro parado em estoque por categoria: quanto a loja receberia vendendo tudo hoje, pelo preço atual.
// Produtos sem preço ficam de fora, porque ainda não têm valor de venda.
export function calcularEstoquePorCategoria(produtos) {
  const categorias = []
  produtos.forEach((produto) => {
    if (produto.price === undefined) return

    const existente = categorias.find((item) => item.categoria === produto.category)
    if (existente) {
      existente.unidades += produto.estoque
      existente.valor += produto.price * produto.estoque
    } else {
      categorias.push({
        categoria: produto.category,
        unidades: produto.estoque,
        valor: produto.price * produto.estoque,
      })
    }
  })
  return categorias
}

// Um cliente que espera vários produtos conta uma vez só
export function contarClientesAguardando(avisos) {
  const emails = []
  avisos.forEach((aviso) => {
    if (!emails.find((email) => email === aviso.email)) {
      emails.push(aviso.email)
    }
  })
  return emails.length
}
