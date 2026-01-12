import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// 1️⃣ Place an order
router.post("/", async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    const order = new Order({ userId, items, total });
    await order.save();

    res
      .status(201)
      .json({ message: "Your order has been successfully placed!", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 2️⃣ Get all orders of a user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
