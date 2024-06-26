const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000 || env.PORT;
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.json());
app.use(cors());

// Data Base Models

const User = require("./models/user.model");

// AuthorizationCode

const auth = "mostafawaseem11.";

// Get Methods

app.get("/", (requset, response) => {
  response.status(200).send("!!!@@@@");
});

app.post("/v2/allusers", async (req, res) => {
  const Auth = req.body["auth"];

  if (Auth == Auth) {
    try {
      const user = await User.find({});
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "UnAuthrized" });
  }
});

// Post Methods

app.post("/v2/join", async (req, res) => {
  const Auth = req.body["auth"];
  if (Auth == auth) {
    const data = {
      name: req.body["name"],
      email: req.body["email"],
      password: req.body["password"],
      phoneNumber: req.body["phonenumber"],
    };
    if (data) {
      try {
        const user = await User.create(data);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(400).json({ message: "badRequst(No Data Posted Found)" });
    }
  } else {
    res.status(401).json({ message: "UnAuthrized" });
  }
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
