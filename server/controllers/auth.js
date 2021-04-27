const Auth = require('../models/auth');

exports.getOne = async (req, res) => {
  try {
    const email = req.body.email;
    const foundUser = await Auth.findOne({ email });
    if (foundUser) {
      res.status(200);
      res.send(foundUser);
    } else {
      res.status(502);
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    await Auth.create({
      name,
      email,
      password,
    });
    res.status(201);
    res.send({ Note: 'user created successfully' });
  } catch (error) {
    console.error('POST USER', error);
    res.status(500);
    res.send(error);
  }
};
