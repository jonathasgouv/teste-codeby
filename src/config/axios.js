import axios from "axios";

exports.getProducts = async () => {
    try {
      const response = await axios.get('https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search', {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
      return response.data
    } catch (error) {
      console.error(error);
    }
  }