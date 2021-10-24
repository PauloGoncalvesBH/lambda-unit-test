const { tokenIsValid } = require('../../src/authentication')

// Teste unitário validando o comportamento da função 'tokenIsValid'.
// Essas validações são simples, porém pegam todo o comportamento possível para
// esse método.

// Embora com esse teste é possível ter certeza de como essa função lida com os dados enviados,
// não conseguimos saber se ele barraria de maneira correta as tentativas de acesso e permitiria
// apenas o que encaixa na regra dessa função.

describe('tokenIsValid', () => {
  it('Should return false when token isn\'t valid', async function () {
    const invalidToken = '123qasfnghwuiiu'

    expect(tokenIsValid(invalidToken)).toBeFalsy()
  })

  it('Should return true when token is valid', async function () {
    const validToken = 'auth-password'

    expect(tokenIsValid(validToken)).toBeTruthy()
  })
})
