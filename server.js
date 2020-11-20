// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

const Restaurant = require("./Restaurant");
const TGIF = new Restaurant();



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html")); //home
});

app.get("/reservation/add", function(req, res) {
    res.sendFile(path.join(__dirname, "/reservation.form.html"));
});

app.get("/reservation/view", function(req, res) {
    res.sendFile(path.join(__dirname, "/reservation.view.html")); //tables
});

app.get("/api/reservation/tables", function(req, res) {
    return res.json(TGIF.reservations);
});

app.get("/api/reservation/waitList", function(req, res) {
    return res.json(TGIF.waitList);
});

// Create New Characters - takes in JSON input
app.post("/reservation/add", function(req, res) {
    //req.body
    let r = req.body;
    TGIF.makeReservation(r.name, r.email, r.phone, r.id)
    res.sendFile(path.join(__dirname, "/reservation.view.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});