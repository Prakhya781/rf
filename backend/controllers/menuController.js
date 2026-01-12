import Menu from "../models/Menu.js";

// Get all menu items
export const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find(); // MongoDB se fetch
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
