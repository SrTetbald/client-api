import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Client extends Document {
    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    email: string;

    @Prop({ default: null })
    telefone: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);