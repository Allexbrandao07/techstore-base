const CUPONS = {
  PRIMEIRACOMPRA: 0.1,
}

export function validarCupom(codigo, cliente) {
  const codigoNormalizado = codigo.trim().toUpperCase()
  const desconto = CUPONS[codigoNormalizado]

  if (!desconto) {
    return { valido: false, mensagem: 'Cupom inválido' }
  }

  if (codigoNormalizado === 'PRIMEIRACOMPRA' && cliente.pedidosAnteriores > 0) {
    return { valido: false, mensagem: 'Este cupom vale só para a primeira compra' }
  }

  return { valido: true, desconto }
}
