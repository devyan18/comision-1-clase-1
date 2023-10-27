import { body, param } from "express-validator";

export const updatePostValidation = [
  param("postId").isNumeric().withMessage("La id debe ser un numero").toInt(),
  body("title")
    .optional()
    .isString()
    .withMessage("El título debe ser un string"),
  body("desc")
    .optional()
    .isString()
    .withMessage("La descripcion debe ser un string"),
  body("image").optional().isURL().withMessage("La imagen deber ser una url."),
];
