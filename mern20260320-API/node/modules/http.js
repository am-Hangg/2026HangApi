import { response } from "express";
import http, { Server } from "http";


 const server = http.createServer((request, Response) => {
  console.log(request.method);
  console.log(requesturl);

  Response.writeHello(200, {"contact-type": "text"/html});
  
  switch (request.url) {
    case "/about":
      return response.end("<h1>about page</h1>");

    case "/contact":
        return response.end("<h1>contact page</h1>");

    default:
      return response.end("<h1>home page</h1>")    
  }
});

Server.listen(8000, () => {
  console.log ("Server is running port 8000...");
});
