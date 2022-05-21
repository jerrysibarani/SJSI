const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

const port = process.env.PORT || 5000; // 8080

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Require testimonial routes
const testimonialRoutes = require("./routes/testimonial.routes.js");

// using as middleware
app.use("/api/testimonials", testimonialRoutes);

// Require users routes
const usersRoutes = require("./routes/users.routes.js");

// using as middleware
app.use("/api/users", usersRoutes);

// Require employees routes
const employeesRoutes = require("./routes/employees.routes.js");

// using as middleware
app.use("/api/employees", employeesRoutes);

// Require client routes
const clientRoutes = require("./routes/client.routes.js");

// using as middleware
app.use("/api/client", clientRoutes);

// Require auth routes
const authRoutes = require("./routes/auth.routes.js");

// using as middleware
app.use("/api/auth", authRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
