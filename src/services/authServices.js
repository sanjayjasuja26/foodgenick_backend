const jwt = require('jsonwebtoken');
const config = require('../config')
const audience = "api://foodGenic"
const algorithm = "HS256"
module.exports = {

  async issueJwtToken(payload) {
    return jwt.sign(payload, config.jwtSecret, { audience, algorithm, expiresIn: '5h' });
  },

  async verifyJwtToken(token, cb) {
    jwt.verify(token, config.jwtSecret, { audience, algorithms: [algorithm], }, cb);
  }
}


