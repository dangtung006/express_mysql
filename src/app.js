const express = require("express");
const app = express();
const appRoutes = require("./routes/index");
const {
    errorHandler
} = require("../src/middlewares/request")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(appRoutes());
app.use(errorHandler)
const server = app.listen(3001, () => {
    console.log("app listen on port 3001")
})

process.on("SIGINT", () => {
    server.close(() => console.log("Server Exited"));
})