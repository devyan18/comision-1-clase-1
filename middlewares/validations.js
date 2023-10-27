export const validatePost = (req, res, next) => {
  const { title, desc } = req.body;

  if (req.url === "/posts" && req.method === "POST") {
    if (!title) return res.status(400).send("Property title is required");
    if (!desc) return res.status(400).send("Property desc is required.");
  }

  next();
};
