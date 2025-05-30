import { Module } from '@nestjs/common';
import { AppController } from './practice.controller';
import { AppService } from './practice.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      
    }),
    DatabaseModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
