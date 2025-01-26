import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './schema/client.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClient } from './interfaces/client.interface';

@Injectable()
export class ClientsService {
    constructor(
        @InjectModel(Client.name) private readonly clientModel: Model<IClient>,
    ) {}

    // Criar
    async create(client: IClient): Promise<IClient>{
        const createdClient = new this.clientModel(client);
        return await createdClient.save();
    }

    // Atualizar
    async update(id: string, client: IClient): Promise<IClient> {
        const updatedClient = await this.clientModel.findByIdAndUpdate(id, client, { new: true }).exec();
        if (!updatedClient) {
            throw new NotFoundException(`Clienet com ID ${id} não encontrado`);
        }
        return updatedClient;
    }

    // Listar
    async findAll(): Promise<IClient[]> {
        return await this.clientModel.find().exec();
    }

    // Buscar por ID
    async findById(id: string): Promise<IClient> {
        const client = await this.clientModel.findById(id).exec();
        if (!client) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return client;
    }

    // Deletar
    async delete(id: string): Promise<IClient> {
        const deletedClient = await this.clientModel.findByIdAndDelete(id).exec();
        if (!deletedClient) {
            throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return deletedClient;
    }
}
