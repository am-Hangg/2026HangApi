// const fs = require ("fs");
// const {sum} = require ("utils.js");

import fs from "fs";
import { sum } from "./utils.js";

console.log = ("am");

console.log("a");

fs.readFile("data.text", "utf-8", (error,data) => {
  if (error) {
    console(error);
    return;
  }

  console.log(data);
});

const result = sum(4, 5);
console.log(result);

console.log("end");