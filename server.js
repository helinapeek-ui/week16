
const express = require("express");
const path = require("path");
const cv = require("./data.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/js", express.static(path.join(__dirname, "js")));

app.get("/", (req, res) => {
    res.render("index", { cv: cv });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server töötab pordil ${PORT}`);
});
