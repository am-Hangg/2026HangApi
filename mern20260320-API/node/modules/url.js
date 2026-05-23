const codeitURL = 
"https://codeit.com.np/popular-courses?q=mernduration=4month";

const urlObject = new URL(codeitURL);
console.log(urlObject);

console.log(urlObject.host); // host mane matra chaiyo vane 
console.log(urlObject.search); // search chaiyo vane 
