import 'dotenv/config'
import Queue from './lib/Queue';
import ProductsMail from './jobs/ProductsMail';

Queue.process(ProductsMail.handle)