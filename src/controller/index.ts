import express from "express";
import friendController from "./friend.controller";
import userController from "./user.controller";

const router = express.Router();

router.use("/users", userController);

router.use("/friends", friendController);

export default router;
