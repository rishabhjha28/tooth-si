const express = require("express");
const app = express();



if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Server Started Successfully At Port", port);
});