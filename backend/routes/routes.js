const express = require("express")
const router = express.Router();
const path = require('path');

const productModal = require("../Model")

router.get('/api', async (req, res) => {
  try {
      const fetchedProducts = await productModal.find();
      console.log(fetchedProducts);
      res.json({ fetchedProducts: fetchedProducts });
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

module.exports = router;