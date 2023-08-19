// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000; // Use any available port you prefer

// In this example, we will use a simple in-memory user database.
// In a real application, you would use a proper database for user management.
const users = [];

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Endpoint for user login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the provided username and password match any user in the database
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Successful login
    res.status(200).json({ message: "Login successful" });
  } else {
    // Invalid credentials
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Endpoint for user signup
app.post("/api/signup", (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    res.status(409).json({ message: "Username already exists" });
  } else {
    // Add the new user to the database
    users.push({ username, password });
    res.status(201).json({ message: "Sign up successful" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
