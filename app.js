const express = require('express');
const app = express();

const cors =require('cors');
const morgan=require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

const db = require("./db/index");

require('dotenv').config()
const PORT=process.env.PORT;

const api=require("./router/router");
app.use('/',api);

const path=require('path');
app.use(express.static(`./dist/frontend`));
app.get(`/*`,function(req,res){
  res.sendFile(path.join(__dirname+`/dist/frontend/index.html`));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});