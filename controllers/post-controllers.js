import { listOfPosts } from "../models/post-model.js";

export function ctrlCreatePost(req, res) {
  const { title, desc } = req.body;

  listOfPosts.push({ title, desc });

  res.sendStatus(201);
}

export const ctrlGetAllPosts = (req, res) => {
  res.json(listOfPosts);
};
