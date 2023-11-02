import { connect } from "mongoose";
import { env } from "./envs.js";

export const startConnection = async () => {
  try {
    const db = await connect(env.MONGO_URI);
    console.log(`DB is connected to ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
