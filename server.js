const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const knex = require("./knex");

app.use(express.json());

const port = 4000;

app.get("/api/apples", async (_, res) => {
  const data = await knex.select().from("apples");
  res.status(200).send(data);
});

app.post("/api/apples", async (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//post
//patch/put
//delete
