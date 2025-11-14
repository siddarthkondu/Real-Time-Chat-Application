const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);  // left / right / center
    messageContainer.append(messageElement);
};

// Ask for name
const userName = prompt("Enter your name to join");
socket.emit('new-user-joined', userName);

// ✅ WHEN SOMEONE JOINS (except you), SHOW MESSAGE
socket.on('user-joined', joinedName => {
    append(`${joinedName} joined the chat`, 'left');
});

// ✅ WHEN YOU SEND A MESSAGE
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});

// ✅ WHEN YOU RECEIVE OTHER USERS' MESSAGES
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});
