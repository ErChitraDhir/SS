// const express = require("express")
// const app = express()
// const port = 5000
// const config = require("./config/db")
// const cors = require("cors")
// const path = require("path");


// app.use(cors())
// app.use(express.urlencoded({extended:false}))
// app.use(express.json({limit:'50mb'}))
// app.use(express.static(__dirname+("/public/")))

// const routes = require("./routes/apiRoutes")
// app.use("/api",routes)

// const seeder = require('./config/seeder')
// seeder.adminseeder()

// app.listen(port,()=>{
//     console.log("server Connected")
// })

// //to host frontend and backend together
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });


const express = require("express");
const app = express();
const port = 5000;
const config = require("./config/db");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname + ("/public/")));

// Host frontend before API routes
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

const routes = require("./routes/apiRoutes");
app.use("/api", routes);

const seeder = require('./config/seeder');
seeder.adminseeder();

app.listen(port, () => {
  console.log("server Connected");
});
