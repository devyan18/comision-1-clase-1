import { Sequelize } from "sequelize";
import { env } from "./envs.js";

const { DB } = env;

export const sequelize = new Sequelize(DB.NAME, DB.USER, DB.PASS, {
  host: DB.HOST,
  port: DB.PORT,
  dialect: "mysql",
});

export async function startConnection() {
  await sequelize.sync({ force: false });
  console.log("Database connected");
}
