const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const user = {
  name: "artur",
  age: 26,
  profession: "software engineer",
}

const users = [
  {
    id:'123',
    name: "artur",
    age: 26,
    profession: "software engineer",
  },
  {
    id:'23',
    name: "Gabriel",
    age: 30,
    profession: "software engineer",
  },
  {
    id:'3',
    name: "Luis",
    age: 25,
    profession: "Doctor",
  },
]

app.get("/current-user", (req, res) => {
  res.json({
    ok: true,
    user
  });
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    res.json(users.find(userId => userId.id == id))
});


app.listen(8080,()=>{
    console.log('listening on port 8080');
})