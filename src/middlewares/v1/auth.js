const jwt = require("jsonwebtoken");
const Users = require("../../models/user");

module.exports = {
  async login(req, res, next) {
    try {
      const { email } = req.body;
      const { password } = req.body;
      const user = await Users.findOne({ where: { email: email } });
      if (!user) {
        return res.status(401).json({ message: "Email incorreto" });
      }
      if (user.password === password) {
        const { id, name } = user;
        const token = jwt.sign({ id, name, email }, process.env.SECRET, {
          expiresIn: process.env.EXPIRES_IN,
        });
        return res.status(200).json({ id, token });
      } else {
        return res.status(401).json({ message: "Senha incorreta " });
      }
    } catch (error) {
      return res.status(500).json({ message: `Error interno do servidor ${error}` });
    }
    next();
  },
  async checkToken(req, res, next) {
    const bearerHeader = req.headers.authorization;
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      } else {
        req.decoded = decoded;
        console.log(`token decodificado: ${{decoded}}`);
        next();
      }
    });
  },
};
