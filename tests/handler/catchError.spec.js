const LambdaTester = require('lambda-tester')

const authentication = require('../../src/authentication')
const { handler } = require('../../src/index')

// Esse teste permite validar que a aplicação saberia lidar com falhas corretamente,
// com o erro sendo enviado para o 'catch' e retornando uma mensagem amigável para o usuário.

// Não seria possível fazer essa mesma automação sem o pacote lambda-tester.

jest.mock('../../src/authentication')

describe('catch error', () => {
  beforeEach(() => {
    authentication.tokenIsValid.mockImplementation(() => {
      throw new Error('Falha catastrófica')
    })
  })

  afterEach(() => jest.clearAllMocks())

  it('Should return error message when application throws an error', async function () {
    await LambdaTester(handler)
      .event({
        queryStringParameters: {
          token: 'auth-password'
        }
      })
      .expectResult(result => {
        expect(result.statusCode).toBe(500)
        expect(result.body).toBe(JSON.stringify({
          message: 'Ocorreu um problema, acesse o log da aplicação para acessar os detalhes.',
          error: 'Falha catastrófica'
        }))
      })
  })
})
