const { tokenIsValid } = require('./authentication')

// Essa pequena aplicação possui apenas a lógica de validar se o usuário enviou
// um token válido na query string ao chamar o evento.

// Se o token for inválido o usuário receberá a informação que o acesso não foi autorizado.
// Tendo sucesso na autenticação receberá a informação que foi executado com sucesso.
// Qualquer falha que ocorrer na aplicação será levada ao 'catch', retornando mensagem do que ocorreu para o usuário.

module.exports.handler = async (event, context, callback) => {
  try {
    const { token } = event.queryStringParameters || {}
    if (!tokenIsValid(token)) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Acesso não autorizado.' })
      }
    }

    // Trecho de código que realizaria algum processamento de dados
    // ...

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Processamento realizado com sucesso.' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Ocorreu um problema, acesse o log da aplicação para acessar os detalhes.',
        error: error.message
      })
    }
  }
}
