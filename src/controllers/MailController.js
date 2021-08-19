import axios from '../config/axios'
import Mail from '../lib/Mail'

exports.post = async (req, res) => {
    try {
      const {name, email} = req.body
  
      if (!name || !email) {
        return res.status(400).json({ error: "Missing information" });
      }

      const data = await axios.getProducts()

      await Mail.sendMail({
          from: 'Queue Test <queue@queue.com>',
          to: `${name} <${email}>`,
          subject: 'Produtos da loja',
          html: `
          <h3>Olá, <b>${name}</b></h3>
          <p>Atualmente a loja tem <b>${data.length}</b> produtos.</p>
          `
      })

      return res.status(200);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };