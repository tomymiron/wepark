import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// REGISTER POST
export const register = (req, res) => {
  try {
      const { username, email, fullname, phoneNumber, password, orgName, cbu, image, placeName, placeLocationText } = req.body;

      if(!username || !email || !fullname || !password) {
        return res.status(400).json("Ocurrio un error, los datos no fueron validos");
      }

      // PASSWORD HASING
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const q = "call new_user(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, null);";
      const values = [username, email, fullname, phoneNumber, hashedPassword, orgName, cbu, image, placeName, placeLocationText];
      db.query(q, values, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json("Ocurrió un error");
        }

        return res.status(200).json("Usuario creado exitosamente");
      });
  } catch (err) {
      console.log(err);
      return res.status(400).json("Ocurrió un error", err);
  }
};

// LOGIN POST
export const login = (req, res) => {
  if (req.body.email == "" || req.body.password == "") return res.status(400).json("Completa los campos!");
  const q = "SELECT * FROM users WHERE `email` = ?;";
  db.query(q, [req.body.email], (err, data) => {
      if(err) return res.status(500).json(err);
      if(data.length == 0 || data == null) return res.status(400).json("Usuario no encontrado!");

      const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
      if(!checkPassword) return res.status(400).json("Contraseña o usuario incorrectos!");

      const token = jwt.sign({id:data[0].id}, process.env.SECRET_KEY);
      let {password, ...others} = data[0];
      others.accessToken = token;

      res.status(200).json(others);
  });
};