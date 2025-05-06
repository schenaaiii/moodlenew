import { createApp } from "./config.js";

const app = createApp({
  user: "autumn_star_7622",
  host: "168.119.168.41",
  database: "demo",
  password: "uaioysdfjoysfdf",
  port: 18324,
});

/* Startseite */
app.get("/", async function (req, res) {
  res.render("start", {});
});

app.get("/subject", async function (req, res) {
  res.render("subject", {});
});

app.get("/subject2", async function (req, res) {
  res.render("subject2", {});
});

app.get("/subject3", async function (req, res) {
  res.render("subject3", {});
});

app.get("/subject4", async function (req, res) {
  res.render("subject4", {});
});

app.get("/themes", async function (req, res) {
  res.render("themes", {});
});

app.get("/themes2", async function (req, res) {
  res.render("themes2", {});
});

app.get("/themes3", async function (req, res) {
  res.render("themes3", {});
});

app.get("/themes4", async function (req, res) {
  res.render("themes4", {});
});

app.get("/themes5", async function (req, res) {
  res.render("themes5", {});
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
