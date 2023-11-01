import { sequelize } from "../settings/database.js";
import { DataTypes } from "sequelize";
import { v4 as uuid } from "uuid";

export const postModel = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuid,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
