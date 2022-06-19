const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes");
const r = require("./dateroutes")
const app  = express();
const cors = require("cors")
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/test", 
{
    useNewUrlParser : true,
    //useFindAndModify : false,
    useUnifiedTopology : true
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error: "));
            db.once("open",()=>{
            console.log("connection successful");
});
// app.use(r);
app.use(routes,r);

app.listen(8000,()=>{
    console.log("port listen on 8000")
})


