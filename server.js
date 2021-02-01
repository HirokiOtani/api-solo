const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/apples", async (_, res) => {
  res.send("OK");
  res.status(200);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
