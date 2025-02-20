const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello, API is working!");
});
app.post("/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `Received data: ${name}` });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});