import { Provider } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';

export const REDIS_PUB_SUB = 'REDIS_PUB_SUB';

export const redisPubSubProvider: Provider = {
  provide: REDIS_PUB_SUB,
  useFactory: () => {
    return new RedisPubSub({
      connection: {
        host: 'redis-12092.c321.us-east-1-2.ec2.cloud.redislabs.com',
        port: 12092,
        username: 'default',
        password: 'yf5GqLB8obrspwyzlvDOhHST7oku2FZq',
      },
    });
  },
};
