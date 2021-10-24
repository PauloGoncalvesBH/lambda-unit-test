
function tokenIsValid (verificationToken) {
  return verificationToken === 'auth-password'
}

module.exports = {
  tokenIsValid
}
