const express = require("express");
//const bodyParser = require("body-parser");
const app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
const knex = require("./knex");
const path = require("path");

//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;

app.get("/oranges", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/oranges/post", async (req, res) => {
  await knex("oranges").insert({
    name: req.body.name,
    taste: req.body.taste,
    origin: req.body.origin,
    season: req.body.season,
  });
  res
    .status(200)
    .send(
      "Add a new orange! :" +
        req.body.name +
        req.body.taste +
        req.body.origin +
        req.body.season
    );
});

app.post("/oranges/patch", async (req, res) => {
  await knex("oranges").where({ name: req.body.name }).update({
    taste: req.body.taste,
    origin: req.body.origin,
    season: req.body.season,
  });
  res.status(200).send("Updated!");
});

app.post("/oranges/delete", async (req, res) => {
  await knex("oranges").where({ name: req.body.name }).del();
  res.status(200).send("Deleted!");
});

app.get("/oranges/get", async (_, res) => {
  const data = await knex.select().from("oranges");
  res.status(200).send(`<h2>${JSON.stringify(data)}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
