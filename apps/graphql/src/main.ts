import { NestFactory, Reflector } from '@nestjs/core';
import helmet from 'helmet';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

import { GraphqlModule } from './graphql.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(GraphqlModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    }),
  );
  await app.listen(3000);
}
bootstrap();
