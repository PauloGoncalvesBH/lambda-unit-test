const LambdaTester = require('lambda-tester')

const { handler } = require('../../src/index')

// Esse teste permite validar que o método 'tokenIsValid' está corretamente
// com o código, bem como demonstra que a aplicação sabe lidar com a ausência do token.

// Não seria possível fazer essa mesma automação sem o pacote lambda-tester.

// Mais importante que validar que o método 'tokenIsValid' funciona (via teste unitário no arquivo 'tests/functions/tokenIsValid.spec.js'),
// é entender se ele está bem integrado com a aplicação e que ela vai saber utilizar esse método
// e lidar com qualquer tipo de dado enviado.

describe('Authorization', () => {
  it('Should return unauthorized access when token is invalid', async function () {
    const unauthorizedToken = { token: '123qasfnghwuiiu' }

    await LambdaTester(handler)
      .event({ queryStringParameters: unauthorizedToken })
      .expectResult(result => {
        expect(result.statusCode).toBe(401)
        expect(result.body).toBe(JSON.stringify({ message: 'Acesso não autorizado.' }))
      })
  })

  it('Should return unauthorized access when token isn\'t present', async function () {
    await LambdaTester(handler)
      .event({})
      .expectResult(result => {
        expect(result.statusCode).toBe(401)
        expect(result.body).toBe(JSON.stringify({ message: 'Acesso não autorizado.' }))
      })
  })
})
