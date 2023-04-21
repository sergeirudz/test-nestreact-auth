import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ResetModule } from './reset/reset.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'learn',
      database: 'learn',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    ResetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
