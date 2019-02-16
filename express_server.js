var express = require("express");
var app = express();
var PORT = 8080; // default port 8080
//Set ejs as the view engine
app.set("view engine", "ejs");

//Object urlDatabase keeps track of all the URLs and their shortened forms
var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/", (req, res) => {
  res.send("Hello!");
});

//Add route for /urls
app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };

  res.render("urls_index", templateVars);
});
//Added additional endpoint routes
app.get("/urls.json", (req, res) => {
  res.json(urlDatabase);
});
//Added route: response contains HTML code which is rendered in client browser
app.get("/hello", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});