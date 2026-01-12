import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema, "menu");
export default Menu;
