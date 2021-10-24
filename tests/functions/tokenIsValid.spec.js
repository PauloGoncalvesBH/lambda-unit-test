const { tokenIsValid } = require('../../src/authorization')

// Teste unitário validando o comportamento da função 'tokenIsValid'.
//  Essas validações são de certa forma simples, porém pegam todo o comportamento possível para
//  esse método.

// Embora com esse teste é possível ter certeza de como essa função lida com os dados enviados,
//  não conseguimos saber se ele barraria de maneira correta as tentativas de acesso e permitiria
//  apenas o que encaixa na regra dessa função.

// É devido a essa incerteza do comportamento de todo o código integrado é que os testes
//  no diretório /tests/handler fazem sentido

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
