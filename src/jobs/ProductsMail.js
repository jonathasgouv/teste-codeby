import Mail from '../lib/Mail';
import axios from '../config/axios'

export default {
    key: 'ProductsMail',
    async handle({data}) {
        const {user} = data;
        const products = await axios.getProducts()

        await Mail.sendMail({
            from: 'Queue Test <queue@queue.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Produtos da loja',
            html: `<div style="font-family: verdana;">
            <h3>Olá, <b style="color: #9e1881">${user.name}</b></h3>
            <p>Atualmente a loja tem <b style="background-color: #9e1881; color: white; border-radius: 50%; padding: .3em;">${products.length}</b> produtos.</p>
            </div>
            `
        })
    }
}