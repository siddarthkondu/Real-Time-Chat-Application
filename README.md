WeChat – Real-Time Chat Application 💬

A simple and fast real-time chat application built using Node.js, Socket.io, and Vanilla JavaScript. This project demonstrates how WebSockets enable live bi-directional communication between a server and multiple clients.

🚀 Features

🔗 Real-time messaging using Socket.io

👤 Username-based chat

📩 Receive notifications when a user joins the chat

↔️ Send and receive messages instantly

🎨 Simple and clean UI built with HTML and CSS

💻 Lightweight and beginner-friendly project

📂 Project Structure
/ (root)
│── index.js            # Node.js server using Socket.io
│── package.json        
│── package-lock.json
│
├── index.html          # Chat UI
├── css/
│   └── style.css       # Styling
├── js/
│   └── client.js       # Client-side socket logic
└── logo.png

🛠️ Technologies Used

Node.js

Socket.io

HTML

CSS

JavaScript (Client-side)

📦 Installation & Setup

Follow these steps to run the project locally:

1️⃣ Install Node.js

Download from: https://nodejs.org

2️⃣ Install Dependencies

Open a terminal in the project folder and run:

npm install

3️⃣ Start the Server
node index.js


Server will start on:

http://localhost:8000

4️⃣ Open the Client

Open index.html using Live Server (VS Code extension).

💡 Make sure the server is running before opening the client.

🧠 How It Works
Server (index.js)

Handles user connections

Listens for:

new-user-joined

send

disconnect

Broadcasts events to all connected users

Client (client.js)

Prompts user for a name

Sends and receives chat messages

Displays join messages and incoming chat messages

🎨 User Interface

Chat container displaying messages

Messages appear on:

Right → Your messages

Left → Others’ messages

Clean layout with gradient background

🧪 Example Demo Flow

User opens chat window → enters name

Name is broadcasted → other users see "{name} joined the chat"

Users exchange messages in real-time

When a user disconnects → server logs the event

🤝 Contributing

Feel free to fork the project, submit issues, or send pull requests to improve the chat UI or add features like:

Chat rooms

Typing indicator

Message timestamps

User list

Emojis / media support
