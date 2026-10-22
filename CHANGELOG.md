# Changelog

## 1.5.0 (outubro de 2026)

* Correção do total do carrinho: preços que a API envia como texto passam a ser convertidos para número.
* Produtos sem preço definido exibem "Preço em breve" e não podem ser adicionados ao carrinho.
* Produtos esgotados deixam de aparecer na loja, nos relacionados e nas sugestões do carrinho. A página do produto continua acessível pelo link direto, com o botão "Avise-me quando chegar".
* Coluna "Aguardando aviso" na área interna `/estoque`, com nome e e-mail de quem pediu aviso.
* Cupom `PRIMEIRACOMPRA` é verificado de novo quando o cliente muda com o carrinho aberto, para o desconto não passar para clientes que já compraram. Quem já tem pedidos recebe uma mensagem explicando que o cupom vale só para a primeira compra.
* Novo painel do lojista em `/painel`, com acesso pelo menu: valor em estoque por categoria, produtos esperando preço e clientes aguardando produtos esgotados.

## 1.4.0 (setembro de 2026)

* Novo visual do card de produto na lista, com avaliação e selos.
* Preço original riscado nos produtos em promoção.

## 1.3.0 (agosto de 2026)

* Cupom `PRIMEIRACOMPRA` passa a valer somente para clientes sem pedidos anteriores. Decisão do financeiro após uso repetido do cupom pelos mesmos clientes.
* Seletor de cliente de teste no rodapé, para validar regras que dependem do cliente.

## 1.2.0 (maio de 2026)

* Página interna `/estoque` para o time de estoque.
* Selo "Esgotado" nos produtos sem unidades.

## 1.1.0 (abril de 2026)

* Seção "Você também pode gostar" no carrinho.
* Produtos relacionados na página do produto.

## 1.0.0 (março de 2026)

* Lançamento da loja.
