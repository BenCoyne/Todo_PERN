const express = require("express");

const app = express();

app.get("/todos", (req, res) => {
	res.json([
		{ name: "practice guitar", completed: true },
		{ name: "meal prep", completed: false },
	]);
});

module.exports = app;
