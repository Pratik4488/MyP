console.log("welcome to MyP backend");
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth")


// app configs
const app = express();
dotenv.config();

// mongoose connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})

mongoose.connection.on("connected", ()=>{
    console.log("DB is ready...");
})


// setting public dir 
app.use(express.static("public"));


app.use(express.json());
app.get("/", (req, res) => {
    res.json("Welcome to MyP");
})


app.use("/auth", authRoutes);


if (process.env.NODE_ENV == "PRODUCTION") {
    app.use(express.static("myp/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "myp", "build", "index.html"));
    })
}

app.listen(process.env.PORT || 3000, () => {
    console.log(`MyP DB on port ${process.env.PORT} is running...`);
})