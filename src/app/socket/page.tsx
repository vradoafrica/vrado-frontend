import { io } from "socket.io-client"

const socket = io(" https://vrado-backend.onrender.com/")

socket.on("connect",()=>{
    console.log(socket.id)
})

socket.emit('start-task', { url: 'https://example.com' });

socket.on('task-result', (data) => {
  console.log(data);
});

export default function Automation() {
    return (
    <h1>

    </h1>)
}
