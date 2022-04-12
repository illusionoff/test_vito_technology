import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const MONGO_DB_USER = process.env.MONGO_DB_USER;
    console.log('process.env.MONGO_DB_USER=', MONGO_DB_USER);
    return 'Test task ООО Vito Technology. Siniakou Aliaksandr ';
  }
}
