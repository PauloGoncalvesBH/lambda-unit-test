
// Essa função é o único trecho de código que é possível validar sem o uso da biblioteca 'lambda-tester'.
//  Isso ocorre no arquivo ./tests/functions/tokenIsValid.spec.js

// Para validar a integração desse método com o restante do código foram criados testes em /tests/handler

function tokenIsValid (verificationToken) {
  return verificationToken === 'auth-password'
}

module.exports = {
  tokenIsValid
}
