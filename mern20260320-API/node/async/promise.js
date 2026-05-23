//promise:async programming, promise is a future value.
// pending-> fulfilled, reject


import { error } from "console";
import fs from "fs/promises";

fs.readFile("data/data.txt", "utf-8")
 .then((data) => {
  console.log(data);
 })/**fulfill(success case) */
 .catch((error) => {
  console.log (error);
 })/**reject(error case) */
 .finally(() => {
  console.log ("finally")
 });

 // dherai data ekai choti read garda

 fs.readFile("file1.txt", "utf-8")
 .then((data1) => {
  return fs.readFile("file2.txt", "utf-8");
 })
 .then((data2) => {
  return fs.readFile("file3.txt", "utf-8");
 })
  .then((data3) => {
    console.log (data3)
  })
  .catch((error) => {
    console.log(error);
  });
