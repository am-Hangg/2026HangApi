import fs from "fs";

const fetchData = () =>
   new Promise ((resolve, reject) => {
  fs.readFile ("data/data.txt", "utf8", (error, data) => {
  if (error) {
    reject (error);
  } else {
    resolve (data);
  }
 });
});

// fetchData.then((data) => {
//   console.log(data);
// });

async function myFetchData (){
 const data = await fetchData();
 console.log();
}
myFetchData();