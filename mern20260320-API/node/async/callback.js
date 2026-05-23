//callback function: function used as a parameter in another function.
// higher order function: function that accept another as parameter.


import { isUtf8 } from "buffer";
import fs from "fs";

fs.readFile("data/data.txt", "isUtf8", (error, data) => {
  if(error) {
    console.log(error);
  } else {
    console.log(data);
   }
  });

  //scenario: read file1 => success => read file2 => success => read file3
   // callback hell: callback vitra callback and callback vitra callback hunulai callback vaninnx

  fs.readFile("data/file.txt", "utf8", (error1, data1) => {
    if (error1) {
      console.log(error1);
       } else {

           fs.readFile("data/data.txt", "isUtf8", (error2, data2) => {
            if(error2) {
              console.log(error2);
               } else {

                fs.readFile("data/data.txt", "isUtf8", (error3, data3) => {
                  if(error3) {
                  console.log(error3);
                  } else {

                  console.log(data1);
                  console.log(data2);
                  console.log(data3);
                }
            });
          }
      });
    }
  });