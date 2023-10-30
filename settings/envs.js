import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 4000,
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
};
