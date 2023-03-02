const jwt = require('jsonwebtoken');

exports.verifyToken = async function(req, res, next) {

  const token = req.body.token || req.query.token || req.headers["x-access-token"]

  if (!token) {
    return res.status(403).send("A token is required for authentication")
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY)
    res.user = decoded;
  } catch(err) {
    return res.status(401).send("Invlid token")
  }

  return next()
}
