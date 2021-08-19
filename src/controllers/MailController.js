import axios from '../config/axios'

exports.post = async (req, res) => {
    try {
      const {name, email} = req.body
  
      if (!name || !email) {
        return res.status(400).json({ error: "Missing information" });
      }

      const data = await axios.getProducts()

      return res.json(data);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };