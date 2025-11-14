const io = require('socket.io')(8000, {
    cors: {
        origin: "*",     // Allow Live Server
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on('connection', socket => {
    console.log("New User Joined:", socket.id);

    socket.on('new-user-joined', name => {
        console.log('New user:', name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', {
            message: message,
            name: users[socket.id]
        });
    });

    socket.on('disconnect', () => {
        console.log(`${users[socket.id]} left`);
        delete users[socket.id];
    });
});
