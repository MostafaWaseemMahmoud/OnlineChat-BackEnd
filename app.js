const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000 || env.PORT;
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.json());
app.use(cors());

const AuthorizationCode = "mostafawaseem11.";

app.get("/", (requset, response) => {
  response.status(200).send("!!!@@@@");
});

mongoose
  .connect(
    "mongodb+srv://mostafawaseem22:F4nNYVG7SFzSIWct@onlinechatdb.4uqhkez.mongodb.net/?retryWrites=true&w=majority&appName=OnlineChatDb"
  )
  .then(() => {
    console.log("connected To Database");
    app.listen(PORT, () => {
      console.log(`Server Is Runing In Port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("connectoin Faild");
  });
