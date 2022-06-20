import * as Validator from "express-validator";

import * as Middleware from "@/middlewares";

export const validateFieldOfLogin: Validator.ValidationChain[] = [
  Validator.check("email").isEmail().withMessage("Email is required"),
  Validator.check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  Validator.check("password").isLength({ max: 20 }).withMessage("Password must be at least 20 characters long"),
  Validator.check("password").custom(Middleware.isPasswordUser),
];

export const validateFieldOfCreaterUser: Validator.ValidationChain[] = [
  Validator.check("name").notEmpty().withMessage("Name is required"),
  Validator.check("email").isEmail().withMessage("Email is required"),
  Validator.check("email").custom(Middleware.isEmailUser),
  Validator.check("password").notEmpty().withMessage("The password is required"),
  Validator.check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  Validator.check("password").isLength({ max: 20 }).withMessage("Password must be at least 20 characters long"),
];
