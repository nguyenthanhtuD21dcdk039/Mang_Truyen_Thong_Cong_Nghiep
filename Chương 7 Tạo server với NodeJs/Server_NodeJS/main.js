
// Đây là module có sẵn dùng để tạo server nodejs
const http = require('http')

const server = http.createServer((req, res) => {
    // Kiểu Json
    res.setHeader('Content-Type', 'application/json')
    res.end('Hello Fen')
})
server.listen(4000, () => {
    console.log('Server is running on port 4000')
})