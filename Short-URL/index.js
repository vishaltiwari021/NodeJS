const express = require("express");
const path  = require("path");
const cookieParser = require("cookie-parser");
const {restrictToLoggedinUserOnly,checkAuth} = require("./middleware/auth")

const { connectToMongoDB } =  require("./coneection");
const URL  = require("./models/url");

const app = express();

const staticRouter = require("./routes/StaticRouter");
const urlRoute = require("./routes/url");
const userRoute  = require("./routes/user");


const PORT = process.env.PORT || 8000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookieParser()); 

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/",checkAuth,staticRouter);
app.use("/user",userRoute);

app.get("/url/:shortId", async (req,res)=>{
    const shortId  = req.params.shortId;
    const entry  = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push :{
                visitHistory:{timestamp:Date.now()},
            },

        }
    );
    if(!entry){
         return res.status(404).send("Short URL not found");
    }
    res.redirect(entry.redirectURL);

});
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    }
);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});