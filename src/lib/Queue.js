import Queue from 'bull';
import redisConfig from '../config/redis';

import ProductsMail from '../jobs/ProductsMail';

const mailQueue = new Queue(ProductsMail.key, redisConfig);

export default mailQueue;