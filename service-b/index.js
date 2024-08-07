const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

// Endpoint to get user orders
app.get('/orders/:userId', async (req, res) => {
  try {
    // Get user info from ServiceA
    const userResponse = await axios.get(`http://service-a:3000/users/${req.params.userId}`);
    const user = userResponse.data;

    // Dummy orders data
    const orders = [
      { userId: 1, orderId: 'A1', item: 'Laptop' },
      { userId: 2, orderId: 'B1', item: 'Phone' }
    ];

    // Find orders for the user
    const userOrders = orders.filter(order => order.userId === user.id);
    res.json({ user, orders: userOrders });
  } catch (error) {
    res.status(500).send('Error fetching user or orders');
  }
});

app.listen(port, () => {
  console.log(`ServiceB listening at http://localhost:${port}`);
});
