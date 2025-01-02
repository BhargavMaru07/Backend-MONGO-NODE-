const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat");
const { timeStamp } = require("console");
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp")
  .then(() => console.log("Mongodb is connected"))
  .catch((e) => console.log(`Error in mongodb ${e}`));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("app is working");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index", { chats });
});

app.get("/chats/add", (req, res) => {
  res.render("addChat");
});

app.post("/chats", (req, res) => {
  let { from, message, to } = req.body;
  let newChat = new Chat({
    from,
    message,
    to,
    createdAt: new Date(),
  });
  newChat
    .save()
    .then((data) => console.log(data))
    .catch((e) => console.log("Error is : ", e));
  res.redirect("/chats");
});
app.listen(PORT, () => console.log("App listening"));