import User from "../models/userModel.js";
import CartItem from "../models/cartitemModel.js";

// Add item to cart
const addToCart = async (req, res) => {
   try {
      const { userId, itemId } = req.body;

      const user = await User.findByPk(userId);
      if (!user) {
         return res.json({ success: false, message: "User not found" });
      }

      // Find or create the cart item
      let cartItem = await CartItem.findOne({ where: { userId, itemId } });

      if (cartItem) {
         cartItem.quantity += 1;
         await cartItem.save();
      } else {
         await CartItem.create({ userId, itemId, quantity: 1 });
      }

      res.json({ success: true, message: "Added to cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error adding to cart" });
   }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
   try {
      const { userId, itemId } = req.body;

      const user = await User.findByPk(userId);
      if (!user) {
         return res.json({ success: false, message: "User not found" });
      }

      const cartItem = await CartItem.findOne({ where: { userId, itemId } });

      if (!cartItem) {
         return res.json({ success: false, message: "Item not in cart" });
      }

      if (cartItem.quantity > 1) {
         cartItem.quantity -= 1;
         await cartItem.save();
      } else {
         await cartItem.destroy();
      }

      res.json({ success: true, message: "Removed from cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error removing from cart" });
   }
};

// Get cart data
const getCart = async (req, res) => {
   try {
      const { userId } = req.body;

      const user = await User.findByPk(userId);
      if (!user) {
         return res.json({ success: false, message: "User not found" });
      }

      const cartItems = await CartItem.findAll({
         where: { userId },
         attributes: ['itemId', 'quantity'],
      });

      res.json({ success: true, cartData: cartItems });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error fetching cart" });
   }
};

export { addToCart, removeFromCart, getCart };