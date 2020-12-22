require("dotenv").config({ path: `.env` });
let express = require('express')
let apiRoutes = require("./routes/apiRoutes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const cors = require("cors");
const { mongoAtlasConnectionString } = require("./config/config");

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(mongoAtlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
if (mongoose.connection) {
    console.log(`Successfully connected to mongodb: \n database: ${process.env.DATABASE} \n collection: ${process.env.COLLECTION}`)
}

app.use('/', apiRoutes)

var port = process.env.PORT || 8080;
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Profile Auth on port " + port);
});