import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

const createNewUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUserInfo = {
    name,
    email,
    password: hashedPassword,
    isAdmin: name === "seba",
  };

  const user = await UserModel.create(newUserInfo);

  // const user = new UserModel({
  //   name,
  //   email,
  //   password: hashedPassword,
  //   isAdmin: name === "seba",
  // });

  // await user.save();

  console.log(user.id);

  return user;
};

const getOneUser = async ({ id }) => {
  const user = await UserModel.findById(id);

  // const allUsers = await UserModel.find()

  return user;
};

export const getUserByEmail = async ({ email }) => {
  const user = await UserModel.findOne({ email });

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await getUserByEmail({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  return user;
};

export const updateUser = async (id, datos) => {
  const user = await UserModel.findByIdAndUpdate(id, datos, { new: true });
  return user;
};

export const deleteUser = async (id) => {
  await UserModel.findByIdAndDelete(id);
};

export const userModel = {
  create: createNewUser,
  findOne: getOneUser,
  update: updateUser,
  destroy: deleteUser,
};
