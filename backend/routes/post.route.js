import express from "express"
import postController from "../controllers/post.controller.js"

const router = express.Router()

router.get("/get-posts", postController.getPosts)

export default router