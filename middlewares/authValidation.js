import { userModel } from "../models/user-model.js";
import jwt from "jsonwebtoken";

export const authValidation = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    console.log("no hay token");
    return res.sendStatus(401);
  }

  try {
    const { userId } = jwt.verify(authorization, "secret");
    const user = userModel.findOne({ id: userId });

    if (!user) {
      console.log("no hay usuario");
      return res.sendStatus(401);
    }

    req.user = user;

    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
