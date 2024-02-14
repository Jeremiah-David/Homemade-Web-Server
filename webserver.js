const net = reuired('net')

const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    const requestString = buffer.toString('utf-8')
    console.log(requestString)
  })
})

server.listen(8080, () => {
  console.log('Server started')
})
