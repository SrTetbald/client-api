import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { IClient } from './interfaces/client.interface';

@Controller('clients')
export class ClientsController {
    constructor(
        private clientsService: ClientsService
    ) {}

    @Post() 
    async create(@Body() client: IClient): Promise<IClient> {
        return this.clientsService.create(client);
    }

    @Patch(':id')
    async update(@Body() client: IClient, @Param('id') id: string): Promise<IClient> {
        return this.clientsService.update(id, client);
    }

    @Get()
    async findAll(): Promise<IClient[]> {
        return this.clientsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<IClient> {
        return this.clientsService.findById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IClient> {
        return this.clientsService.delete(id);
    }

}
