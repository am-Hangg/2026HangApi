/**
 * fs: file system module of node js, used for file operation.
 * like create, read, update, delete
 * synchronous: blocking operation
 * asynchronous: non-blocking operation
 * 
 */
// import fs from 'fs';


//1.synchronous: method

//read file
// const result = fs.readFileSync("data/data.txt", "utf8");
// console.log(result);

//write file
//  fs.writeFileSync("data/file.txt", "this is new system.");

//update
// fs.appendFileSync ("data/file.txt", "this is new.");

//delete file
// fs.rmSync("data/data.v.json");

// fs.mkdirSync("folder");

//2. asynchronous method
//read file
FileSystem.readFile("data/data.txt", "utf8",(error, data) => {
 if(error){
  console.log(error);
 } else {
  console.log(data);
 }
});
// file write
fs.writeFile ("data/data.json", JSON.stringify({name: "ram"}),() => {
  console.log("file written successful.");
});

//update file
fs.appendFile ("data/data.json", JSON.stringify({age: "20"}),() => {
  console.log("file update successful.");
});

