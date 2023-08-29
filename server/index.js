const { Server } = require('socket.io');
const io = new Server(3000);
io.on('connection', (socket) => {
  console.log('连接成功');

  socket.emit('hello', 'world');

  socket.on('howdy', (arg) => {
    console.log('接收消息', arg);
  });
});
