const Auth = require('../models/auth');

exports.getOne = async (req, res) => {
  try {
    const email = req.params.email;
    const foundUser = await Auth.find({ email });
    if (foundUser) {
      req.status(200);
      req.body = foundUser;
    } else {
      req.status(502);
    }
  } catch (error) {
    console.log(error);
    req.status(500);
  }
};
// exports.getAuth = async (req, res) => {
//   try {
//     const auths = await Auth.find();
//     res.send(auths);
//   } catch (error) {
//     console.error('GET AUTHS', error);
//     res.status(500);
//     res.send(error);
//   }
// };

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
