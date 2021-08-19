import axios from "axios";

exports.getProducts = async () => {
    try {
      const response = await axios.get(process.env.PRODUCTS_URL, {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
      return response.data
    } catch (error) {
      console.error(error);
    }
  }