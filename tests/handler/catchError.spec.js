const LambdaTester = require('lambda-tester')

const authorization = require('../../src/authorization')
const { handler } = require('../../src/index')

// Esse teste permite validar que a aplicação saberia lidar com falhas corretamente,
//  com o erro sendo enviado para o 'catch' do arquivo src/index.js e retornando uma
//  mensagem amigável para o usuário.

// Não é possível fazer essa validação manualmente, podendo ser feito apenas unitariamente e com uso do pacote lambda-tester.

jest.mock('../../src/authorization')

describe('catch error', () => {
  beforeEach(() => {
    authorization.tokenIsValid.mockImplementation(() => {
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
