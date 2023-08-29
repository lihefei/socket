// 导入socket.io-client客户端
import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

export let socket = null;

// 连接
export function connect(value) {
  socket = io(value, { transports: ['websocket'] });

  socket.on('connect', (arg) => {
    console.log(arg);
  });

  socket.on('hello', (arg) => {
    console.log(arg);
  });
}

// 发送消息
export function send() {
  socket.emit('howdy', 'stranger');
}
