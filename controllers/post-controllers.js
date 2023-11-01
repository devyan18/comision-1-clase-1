import { postModel } from "../models/post-model.js";

export async function ctrlCreatePost(req, res) {
  try {
    const { title, desc, image } = req.body;

    const newPost = await postModel.create({ title, desc, image });

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function ctrlGetAllPosts(req, res) {
  try {
    const posts = await postModel.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function ctrlGetPostById(req, res) {
  try {
    const { postId } = req.params;
    const post = await postModel.findByPk(postId);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function ctrlUpdatePost(req, res) {
  try {
    const { postId } = req.params;
    const { title, desc, image } = req.body;

    const post = await postModel.findByPk(postId);

    await post.update({ title, desc, image });

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function ctrlDeletePost(req, res) {
  try {
    const { postId } = req.params;

    const post = await postModel.findByPk(postId);

    await post.destroy();

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
