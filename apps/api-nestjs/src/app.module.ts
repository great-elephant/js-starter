import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { als } from '$share/als';
// import { DB_URL } from '$share/const';
import { HaloModule } from 'halo';

@Module({
  imports: [
    // Helpers:
    ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     url: DB_URL,
    //   }),
    // }),

    // Domains:
    HaloModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, _, next) => {
        const store = {
          lang: req.headers['lang'] || 'en',
        };

        als.run(store, () => next());
      })
      .forRoutes('*');
  }
}
