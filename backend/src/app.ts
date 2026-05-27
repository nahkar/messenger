import express from 'express';
import authRoutes from './routes/auth.routes';
import messageRoutes from './routes/message.routes';
import chatRoutes from './routes/chat.routes';
import usersRoutes from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/users', usersRoutes);

export default app;
