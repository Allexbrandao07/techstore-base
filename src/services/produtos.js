import { get } from './api'

// Formato dos produtos documentado em docs/api.md
// A API manda o preço de alguns produtos como texto ("89"), então convertemos para número.
// Produtos ainda sem preço continuam com price undefined.
export function buscarProdutos() {
  return get('/products.json').then((produtos) =>
    produtos.map((produto) => {
      if (produto.price !== undefined) {
        produto.price = Number(produto.price)
      }
      return produto
    })
  )
}
