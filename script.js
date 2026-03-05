const button = document.querySelector("#click");
const input = document.querySelector("#messageInput");
const messages = document.querySelector("#messageList");

const messageArray = [];

async function getMessages() {
  const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const messages = await response.json();

  messages.innerHTML = '';
  messages.forEach(msg => {
    const messageDiv = document.createElement('div');

  })
};

async function sendMessage() {
  const messageText = input.value;

  const msg = { user: , message: messageText };

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageData)
  });

  const data = await response.json();

  messages.innerHTML += `<p>You: ${messageData}</p>`;
  messages.innerHTML += `<p>Server received the message!</p>`;

  input.value = "";
};

button.addEventListener("click", sendMessage);