const express = require("express");
const XLSX = require("xlsx");
const bodyParser = require("body-parser");
require("dotenv").config();

//Creating an instance of express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//reading data from the excel file
const wb = XLSX.readFile("sydney-temperatures.csv", {
  cellDates: true,
});
const tempData = wb.Sheets["Sheet1"];
const data = XLSX.utils.sheet_to_json(tempData);
console.log(data);
app.get("/", (req, res) => {
  res.json(data);
});
//Server listening to this port
app.listen(process.env.PORT, () => {
  console.log("Listening to port", process.env.PORT);
});
