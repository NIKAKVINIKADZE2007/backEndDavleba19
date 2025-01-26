import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { checkTimeMiddlewear } from './middleweares/checkTime.middleweare';
import { randomCheckMiddleweare } from './middleweares/randomCheck.middlewear';
import { checkForApiKey } from './middleweares/checkForApiKey';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(checkTimeMiddlewear)
  //     .forRoutes({ path: '*', method: RequestMethod.ALL });
  // }
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(randomCheckMiddleweare)
  //     .forRoutes({ path: '*', method: RequestMethod.ALL });
  // }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(checkForApiKey)
      .forRoutes({ path: '*', method: RequestMethod.DELETE });
  }
}
