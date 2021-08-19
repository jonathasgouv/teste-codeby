import Queue from '../lib/Queue'

exports.post = async (req, res) => {
    try {
      const {name, email} = req.body
  
      if (!name || !email) {
        return res.status(400).json({ error: "Missing information" });
      }

      const user = {
          name,
          email
      }

      // Adicionar job ProductsMail na fila
      await Queue.add({user});

      return res.sendStatus(200);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };