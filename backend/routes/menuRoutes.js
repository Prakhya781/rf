import express from "express";
import { getMenuItems } from "../controllers/menuController.js";

const router = express.Router();

// GET all menu items
router.get("/", getMenuItems);

export default router;
