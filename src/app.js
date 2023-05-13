const express = require("express");
const app = express();
const appRoutes = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(appRoutes());
const server = app.listen(3001, () => {
    console.log("app listen on port 3001")
})

process.on("SIGINT", () => {
    server.close(() => console.log("Server Exited"));
})