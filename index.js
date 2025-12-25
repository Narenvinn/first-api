const express = require("express");
const app = express();

// Middleware to read JSON body
app.use(express.json());

const PORT = process.env.PORT || 3000;

// GET API
app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "My first GET API is working"
  });
});

// GET with query params
app.get("/user", (req, res) => {
  const { id, name } = req.query;

  res.json({
    userId: id,
    userName: name,
    message: "User data received successfully"
  });
});

// GET with URL params
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    userId: userId,
    message: "User fetched using URL parameter"
  });
});

// POST API
app.post("/user", (req, res) => {
  const { name, email } = req.body;

  res.json({
    status: "success",
    name: name,
    email: email,
    message: "User created successfully"
  });
});


// Start server
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
