import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://short-chat.onrender.com/');
}
