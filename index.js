var app = require('express')();
var http = require('http').createServer(app);
var PORT = 5000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(PORT, () => {
    console.log('listening on *:3000');
});
