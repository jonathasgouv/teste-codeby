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
            html: `
            <h3>Olá, <b>${user.name}</b></h3>
            <p>Atualmente a loja tem <b>${products.length}</b> produtos.</p>
            `
        })
    }
}