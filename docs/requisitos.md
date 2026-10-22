# Requisitos da TechStore

Última atualização: outubro de 2026

## Loja

* A página inicial lista todos os produtos do catálogo.
* O cliente pode filtrar os produtos por categoria.
* Cada produto é exibido em um card com imagem, nome, avaliação e preço.
* Clicar no card abre a página do produto.

## Produtos esgotados

* Produtos sem unidades em estoque não aparecem na loja, nos produtos relacionados nem nas sugestões do carrinho.
* A página do produto esgotado continua abrindo pelo link direto (ex.: links divulgados nas redes sociais), com o botão de compra desabilitado e o botão "Avise-me quando chegar", que registra o nome e o e-mail do cliente.
* A área interna `/estoque` mostra, em cada produto, quem está aguardando o aviso.

## Produtos sem preço

* Produtos sem preço definido não podem ser vendidos.
* Eles continuam visíveis na loja, com "Preço em breve" e o botão de compra desabilitado, e não aparecem nas sugestões do carrinho. O estoque deles já está separado, então não contam como esgotados.

## Página do produto

* Exibe imagem, nome, avaliação, preço, descrição e unidades disponíveis.
* Exibe até 4 produtos relacionados da mesma categoria.

## Carrinho

* Lista os produtos adicionados, com a quantidade de cada um.
* Permite remover unidades.
* Permite aplicar cupons de desconto.
* Exibe o total da compra.
