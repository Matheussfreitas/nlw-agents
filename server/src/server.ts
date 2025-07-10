import { fastify } from 'fastify';
import {
  type ZodTypeProvider,
  validatorCompiler,
  serializerCompiler
} from 'fastify-type-provider-zod';
import { fastifyCors } from '@fastify/cors';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomsRoute } from './http/routes/create-room.ts';
import { createQuestionRoute } from './http/routes/create-question.ts';
import { getRoomsQuestionsRoute } from './http/routes/get-rooms-questions.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return { message: 'Hello, world!' };
});

app.register(getRoomsRoute)
app.register(createRoomsRoute)
app.register(createQuestionRoute)
app.register(getRoomsQuestionsRoute)

app.listen({ port: env.PORT });