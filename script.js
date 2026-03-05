


const button = document.querySelector("#click");
const input = document.querySelector("#messageInput");
const messages = document.querySelector("#messageList");
const userBtn = document.querySelector("#user");

let username = "";

function setUsername() {
  username = prompt('Enter your name')
}

async function getMessages() {
  const response = await fetch ('https://tinkr.tech/sdb/myprojekt2');
  const data = await response.json();

  messages.innerHTML = "";

  data.forEach(msg => {
    const p = document.createElement("p");
    p.innerHTML = `${msg.username}: <br> ${msg.message}`;
    messages.prepend(p);
  });
};


async function sendMessage() {
  if (!username) {
    alert("Set username first")
    return;
  }
  if (!input.value) {
    alert("Write something!")
    return;
  }

  const messageText = input.value;
  let newMessage = {
    username: username,
    message: messageText
  };

  const response = await fetch('https://tinkr.tech/sdb/myprojekt2', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessage)
  });

  input.value = "";

  await getMessages();
};

function whoareyou() {
  if (username) {
    userBtn.outerHTML = `<p2>Your username: ${username}</p2>`;
  };
};

userBtn.addEventListener("click", function() {
  setUsername();
  whoareyou();
});

button.addEventListener("click", function() {
  sendMessage();
  getMessages();
});

async function deleteAll() {

  const response = await fetch("https://tinkr.tech/sdb/myprojekt2");
  const data = await response.json();

  for (const item of data) {

    await fetch(`https://tinkr.tech/sdb/myprojekt2/${item.id}`, {
      method: "DELETE"
    });

  };
};
const secr = document.querySelector("#secret");
secr.addEventListener("click", deleteAll)


getMessages();