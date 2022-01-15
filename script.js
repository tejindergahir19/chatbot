document.getElementById('tejindersingh').innerHTML = '<script src="https://kit.fontawesome.com/070428bd88.js" crossorigin="anonymous"></script><link rel="stylesheet" type="text/css" href="https://codingplex.tk/client/css/bootstrap.min.css"><link rel="stylesheet" type="text/css" href="https://codingplex.tk/client/css/imagehover.min.css"><link rel="stylesheet" type="text/css" href="https://codingplex.tk/client/css/style.css"><link rel="stylesheet" type="text/css" href="https://codingplex.tk/client/css/style2.css"><img id="tejinder_gourav" class="open-button" onclick="openForm()" style="border-radius: 50%;background-color:black;width:100px;" src="https://i.ibb.co/gz8B5yC/botloader.gif" width="100%"><div class="chat-popup" id="myForm"><i class="fa fa-close" onclick="closeForm()" style="color:red;font-size: 20px;"></i><section class="msger"><header class="msger-header"><div class="msger-header-title"><img src="https://i.ibb.co/4NymPg2/robot.png" alt="" srcset=""><p>EhsassBot</p></div></header><main class="msger-chat" style="max-height:400px;"><div class="msg left-msg"><div class="msg-img" style="background-image: url(https://i.ibb.co/bzj2JkJ/bot.png)"></div><div class="msg-bubble"><div class="msg-info"><div class="msg-info-name">EHSASS BOT</div><div class="msg-info-time">12:45</div></div><div class="msg-text">Hi, welcome to Ehsass ChatBot!! Go ahead and send me a message. 😄</div></div></div><div class="msg right-msg"><div class="msg-img" style="background-image: url(https://i.ibb.co/0QDLcmB/user.png)"></div><div class="msg-bubble"><div class="msg-info"><div class="msg-info-name">USER</div><div class="msg-info-time">12:46</div></div><div class="msg-text">You can change your name!😊</div></div></div></main><form class="msger-inputarea"><input type="text" class="msger-input" placeholder="Enter your message..." style="background-color: white;color:black;"><button type="submit" class="msger-send-btn"><i class="fa fa-paper-plane" style="color: white;"></i></button></form></section></div>';

function openForm()
{
    document.getElementById("myForm").style.display="block";
}
function closeForm()
{
    document.getElementById("myForm").style.display="none";
}
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "https://i.ibb.co/bzj2JkJ/bot.png";
const PERSON_IMG = "https://i.ibb.co/0QDLcmB/user.png";
const BOT_NAME = "EHSASS BOT";
const PERSON_NAME = "USER";
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon","kaim palti"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["rinku"]
]
const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["Hello Tejinder Singh !"]
];
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}