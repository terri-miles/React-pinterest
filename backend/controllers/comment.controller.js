import User from "../models/user.model.js";
import Comment from "../models/comment.model.js";
import jwt from "jsonwebtoken";

export const getPostComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ pin: postId })
      .populate("user", "username img name")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching pin:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addComment = async (req, res) => {
  const { description, pin } = req.body;
  const userId = req.userId;

  const comment = await Comment.create({ description, pin, user: userId });

  return res.status(201).json(comment);
};
