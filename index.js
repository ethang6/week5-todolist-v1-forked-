const express = require("express");

const app = express();

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Serve static files (CSS, JS, images)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

// Sample Data for Personal List
const personalInfo = {
  firstName: "Ethan",
  lastName: "Hunt",
  state: "Hawaii",
  country: "USA",
};

// Sample Data for Zodiac List
const zodiacInfo = {
  firstName: "Ethan",
  lastName: "Hunt",
  zodiac: "Aquarius",
  birthstone: "Amethyst",
};

// Route for Personal List (/Personal)
app.get("/Personal", (req, res) => {
  res.render("list", {
    title: "Personal Information",
    items: [
      `First Name: ${personalInfo.firstName}`,
      `Last Name: ${personalInfo.lastName}`,
      `State: ${personalInfo.state}`,
      `Country: ${personalInfo.country}`,
    ],
  });
});

// Route for Zodiac List (/Zodiac)
app.get("/Zodiac", (req, res) => {
  res.render("list", {
    title: "Zodiac Information",
    items: [
      `First Name: ${zodiacInfo.firstName}`,
      `Last Name: ${zodiacInfo.lastName}`,
      `Zodiac: ${zodiacInfo.zodiac}`,
      `Birthstone: ${zodiacInfo.birthstone}`,
    ],
  });
});

// Start the Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
