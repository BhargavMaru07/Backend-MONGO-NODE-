const mongoose = require("mongoose");
const Chat = require("./models/chat");

mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp")
  .then(() => console.log("Mongodb is connected"))
  .catch((e) => console.log(`Error in mongodb ${e}`));

const chats = [
  {
    from: "Bala",
    to: "Bhargav",
    message: "hello there their bala",
  },
  {
    from: "vraj",
    to: "Bhargav",
    message: "hello there their vraj",
  },
  {
    from: "jay",
    to: "Bhargav",
    message: "hello there their jay",
  },
  {
    from: "keval",
    to: "Bhargav",
    message: "hello there their keval",
  },
  {
    from: "harsh",
    to: "Bhargav",
    message: "hello there their harsh",
  },
];

Chat.insertMany(chats)
  .then((data) => console.log(data))
  .catch((e) => console.log(`Error in insertion ${e}`));
