import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { AppModule } from './app/app.module';

@Module({
  imports: [
    AppModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/graphql',
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      installSubscriptionHandlers: true,
      context: ({ request }) => ({ req: request }),
      plugins: [
        ApolloServerPluginInlineTrace(),
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageDisabled()
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
    }),
  ],
})
export class GraphqlModule {}
