function openfacturier() {
  document.getElementById("biller").style.display = "flex";
  document.getElementById("landing").style.display = "none";
}

function openfacturier3() {
  document.getElementById("searchright").style.display = "flex";
  document.getElementById("nav_icon").style.display = "none";
  document.getElementById("close").style.display = "block";
}

function openfacturier4() {
  document.getElementById("close").style.display = "none";
  document.getElementById("searchright").style.display = "none";
  document.getElementById("nav_icon").style.display = "flex";
}

function openfacturier5() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("menudrop").style.display = "block";
  document.getElementById("back").style.display = "block";
}

function openfacturier6() {
  document.getElementById("back").style.display = "none";
  document.getElementById("menudrop").style.display = "none";
  document.getElementById("menu").style.display = "flex";
}

const chatList = document.querySelector("#chatList");

const listOfDis = [
  {
    id: 1,
    img: "./images/img1.jpg",
    name: "claude",
    time: "11:30",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: null,
  },
  {
    id: 2,
    img: "./images/img2.jpg",
    name: "Mel",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 3,
    img: "./images/img3.jpg",
    name: "Sego",
    time: "10:35",
    lasTText: "Lorem ipsum dolor lelel shbdfbhk shbn sit Lorer",
    unRead: 1,
  },
  {
    id: 4,
    img: "./images/img5.jpg",
    name: "Dilane",
    time: "10:30",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 5,
    img: "./images/img7.jpg",
    name: "Samy",
    time: " 09:35",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: null,
  },
  {
    id: 6,
    img: "./images/img2.jpg",
    name: "Daniel",
    time: " 09:20",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 4,
  },
  {
    id: 7,
    img: "./images/img8.jpg",
    name: "Rodrick",
    time: "11:35",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 8,
    img: "./images/img2.jpg",
    name: "Xavier",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 9,
    img: "./images/img3.jpg",
    name: "Dane",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: 2,
  },
  {
    id: 10,
    img: "./images/img9.jpg",
    name: "Juju",
    time: "11:25",
    lasTText: "Lorem ipsum dolor sit Lorem .",
    unRead: null,
  },
];

var messages = [
  {
    from: "sender",
    msg: "hi",
    time: "11:30",
  },
  {
    from: "sender",
    msg: "how you doing?",
    time: "11:30",
  },
  {
    from: "reciever",
    msg: "hey there",
    time: "11:35",
  },
  {
    from: "reciever",
    msg: "i'm very okay",
    time: "11:36",
  },
  {
    from: "reciever",
    msg: "what about you?",
    time: "11:35",
  },
  {
    from: "sender",
    msg: "pretty good too",
    time: "11:39",
  },
  {
    from: "reciever",
    msg: "Okay that's cool",
    time: "11:40",
  },
  {
    from: "sender",
    msg: "yeah",
    time: "11:42",
  },
  {
    from: "reciever",
    msg: "so let's say later right",
    time: "11:50",
  },
  {
    from: "sender",
    msg: "yeah later",
    time: "11:55",
  },
  {
    from: "sender",
    msg: "nice day",
    time: "11:55",
  },
  {
    from: "reciever",
    msg: "thank's you too",
    time: "11:58",
  },
];

var selectedId = null;

let chats = listOfDis.map((chat, index) => {
  chatList.append(generateChatHTML(chat));
});

function createMessageDiv(from, msg, time) {
  var parent = document.createElement("div");
  parent.classList.add(from);

  var msgPar = document.createElement("p");
  msgPar.innerText = msg;

  var brk = document.createElement("br");

  var span = document.createElement("span");
  span.innerText = time;

  parent.appendChild(msgPar);
  parent.appendChild(brk);
  parent.appendChild(span);

  return parent;
}

var chatBox = document.getElementById("chatBox");

function setDiscussion(id) {
  messages.forEach((e) => {
    chatBox.appendChild(createMessageDiv(e.from, e.msg, e.time));
  });
}

function selectDicussion(e, id) {
  e.preventDefault();
  var element = document.getElementById(id);

  var pickedUser = listOfDis.find((e) => e.id === id);
  var selectedUser = document.getElementById("selectedUser");
  selectedUser.innerText = pickedUser.name;

  var selectedProfPic = document.getElementById("selectedProfPic");
  selectedProfPic.src = pickedUser.img;

  if (selectedId === null) {
    var imgHolder = document.getElementById("imgHolder");
    imgHolder.style.height = "0%";
    imgHolder.style.opacity = "0";

    setTimeout(function () {
      const element = document.getElementById("imgHolder");
      element.remove();
    }, 400);

    selectedId = id;
    element.classList.add("chat_active");
    setDiscussion(id);
  }
  if (selectedId === id) {
    return;
  } else {
    var lastPicker = document.getElementById("chat " + selectedId);
    lastPicker.classList.remove("chat_active");
    selectedId = id;
    element.classList.add("chat_active");
    setDiscussion(id);
  }
}

function generateChatHTML({ id, img, name, time, lasTText, unRead }) {
  let chatDiv = document.createElement("div");
  let imgNode = document.createElement("img");
  let chatContainer = document.createElement("div");
  let nameTimeContainer = document.createElement("div");
  let messageUnreadContainer = document.createElement("div");
  let timeDiv = document.createElement("div");
  let unreadDiv = document.createElement("div");
  let nameTag = document.createElement("h4");
  let messageTag = document.createElement("p");
  nameTimeContainer.append(nameTag);
  nameTimeContainer.append(timeDiv);
  messageUnreadContainer.append(messageTag);
  messageUnreadContainer.append(unreadDiv);
  chatContainer.append(nameTimeContainer);
  chatContainer.append(messageUnreadContainer);
  chatDiv.append(imgNode);
  chatDiv.append(chatContainer);

  nameTag.innerText = name;
  messageTag.innerText = lasTText;
  timeDiv.innerText = time;
  imgNode.src = img;
  unreadDiv.innerText = unRead;

  imgNode.classList.add("profile-image");
  chatDiv.classList.add("chat");
  chatContainer.classList.add("chat-container");
  nameTimeContainer.classList.add("name-time-container");
  timeDiv.classList.add("time");
  messageUnreadContainer.classList.add("message-container");
  unreadDiv.classList.add("unread-container");

  chatDiv.setAttribute("id", id);
  chatDiv.addEventListener("click", (e) => {
    selectDicussion(e, id);
  });
  return chatDiv;
}

const scrollToBottom = (id) => {
  const element = document.getElementById(id);
  element.scroll({ top: element.scrollHeight, behavior: "smooth" });
};

const addMessage = (e) => {
  var msg = document.getElementById("send-msg").value;

  if (msg === null || msg === undefined) return;

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  scrollToBottom("chatBox");
  chatBox.appendChild(createMessageDiv("reciever", msg, time));
  document.getElementById("send-msg").value = "";
};

() => {};
