import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

// Place a new order
const placeOrder = async (req, res) => {
   try {
      const { userId, items, amount, address } = req.body;

      const newOrder = await Order.create({
         userId,
         items,
         amount,
         address,
         payment: true,
      });

      // Reset cart after order placement
      await User.update({ cartData: {} }, { where: { id: userId } });

      res.json({ success: true, message: "Order placed successfully", orderId: newOrder.id });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error placing order" });
   }
};

// List all orders
const listOrders = async (req, res) => {
   try {
      const orders = await Order.findAll();
      res.json({ success: true, data: orders });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error fetching orders" });
   }
};

// Get orders for a specific user
const userOrders = async (req, res) => {
   try {
      const orders = await Order.findAll({ where: { userId: req.body.userId } });
      res.json({ success: true, data: orders });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error fetching user orders" });
   }
};

// Update order status
const updateStatus = async (req, res) => {
   try {
      await Order.update(
         { status: req.body.status },
         { where: { id: req.body.orderId } }
      );
      res.json({ success: true, message: "Status updated" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error updating status" });
   }
};

// Verify order (payment confirmation)
const verifyOrder = async (req, res) => {
   const { orderId, success } = req.body;
   try {
      if (success === "true") {
         await Order.update({ payment: true }, { where: { id: orderId } });
         res.json({ success: true, message: "Order verified and paid" });
      } else {
         await Order.destroy({ where: { id: orderId } });
         res.json({ success: false, message: "Order not paid and deleted" });
      }
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Verification failed" });
   }
};

export { placeOrder, listOrders, userOrders, updateStatus, verifyOrder };
