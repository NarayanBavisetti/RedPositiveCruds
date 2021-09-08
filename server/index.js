const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config();
const app = express()

app.use(cors());
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false,
    useUnifiedTopology:true
}).then(() => console.log("DB connected successfully")).catch((err) => console.log(err))

app.use(express.json());
const formRoute = require("./routes/form")
app.use(formRoute)



app.listen(PORT,() => console.log(`PORT is starting at ${PORT}`))