const models = require('../models');
const jwt = require('jsonwebtoken');

const { Doctor } = models;

exports.login = async function (req, res) {
  const { username, password } = req.body

  if (!(username && password)) {
    res.status(400).send("Password and Username are required")
  }

  const user = await Doctor.findOne({ email: username })

  if (user) {
    const token = jwt.sign(
      { user_id: user.id, email: username },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h"
      }
    )
    user.token = token;
    return res.status(200).json({ token })
  }
  return res.status(400).send("Invalid Credentials")
}

