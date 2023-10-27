import { param } from "express-validator";

export const findPostValidation = [
  param("postId").isNumeric().withMessage("La id debe ser un número").toInt(),
];
