require("dotenv").config();

const jwt = require("jsonwebtoken");

import { HttpStatusCodes as Stat } from "../config/http";

import { Request, Response, NextFunction } from "express";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authorization = req?.headers?.authorization;
    const token = authorization?.split(" ");

    if (!authorization || !authorization?.startsWith("Bearer ")) {
      res.status(Stat.Unauthorized).json({ msg: "Unauthorized!!" });
    }

    const payload = jwt.decode(token, process.env.JWT_SECRET);
    req.user = { ...payload };
    next();
  } catch (err) {
    res.status(Stat.ServerError).json({ msg: "Oops! An error occurred", err });
  }
};

export default authenticate;
