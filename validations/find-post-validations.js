import { param } from "express-validator";

export const findPostValidation = [
  param("postId")
    .isString()
    .withMessage("La id debe ser un string de tipo UUIDv4"),
];
