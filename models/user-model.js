import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

let listOfUsers = [];

const createNewUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuid(),
    name,
    email,
    password: hashedPassword,
    isAdmin: name === "seba",
  };

  listOfUsers.push(newUser);

  return newUser;
};

const getOneUser = ({ id }) => {
  const user = listOfUsers.find((user) => user.id === id);

  return user;
};

export const getUserByEmail = ({ email }) => {
  const user = listOfUsers.find((user) => user.email === email);

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = getUserByEmail({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return null;
  }

  return user;
};

export const userModel = {
  create: createNewUser,
  findOne: getOneUser,
};
