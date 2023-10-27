import { body } from "express-validator";

export const createPostValidation = [
  body("title")
    .notEmpty()
    .withMessage("El título es requerido.")
    .isString()
    .withMessage("El título debe ser un string"),
  body("desc")
    .notEmpty()
    .withMessage("La descripcion es requerida.")
    .isString()
    .withMessage("La descripcion debe ser un string"),
  body("image")
    .notEmpty()
    .withMessage("La image es requerida.")
    .isURL()
    .withMessage("La imagen deber ser una url."),
];
