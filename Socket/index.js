// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


var users = [], jobs = [];
const status = ["Hazır", "Çalışıyor", "Tamamladı", "Hata Verdi"]

io.on('connection', (socket) => {
  users.push({ id: socket.id, tarih: new Date().toISOString(), durumcode: 0, durum: status[0] });

  socket.emit('users', users);

  socket.on('map', (data) => {
    var readyUsers = users.filter(f => f.durumcode == 0);
    for (let index = 0; index < readyUsers.length; index++) {
      const element = readyUsers[index];
      element.durumcode = 1;
      element.durum = status[element.durumcode];
      io.sockets.sockets[element.id].send({ type: 'run', id: data.id, mapfuncstr: data.mapfuncstr })
    }
    data.status = status[1]
    data.users = readyUsers;
    data.socketresults = [];
    jobs.push(data)
    socket.send({ type: 'jobupdate', job: data })
    socket.emit('users', users);
  })

  socket.on('reduce', (result) => {
    var { id, data } = result;

    var jobindex = jobs.map(s => s.id).indexOf(id)
    jobs[jobindex].socketresults.push(data)

    jobs[jobindex].status =
      status[jobs[jobindex].socketresults.length == jobs[jobindex].users.length ? 1 : 2] + " " + jobs[jobindex].socketresults.length + " / " + jobs[jobindex].users.length

    eval(jobs[jobindex].reducefuncstr + 'reduce(data)')

    socket.send({ type: 'jobupdate', job: jobs[jobindex] })

    var index = users.map(s => s.id).indexOf(socket.id);
    var element = users[index];
    element.durumcode = 0;
    element.durum = status[element.durumcode];
    socket.emit('users', users);
  })

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    users = users.filter(s => s.id != socket.id);
    socket.broadcast.emit('users', users);
  });
});