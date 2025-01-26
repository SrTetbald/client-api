import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://devhebertabc:example@teste1.h7bwu.mongodb.net/?retryWrites=true&w=majority&appName=Teste1'),
    ClientsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
