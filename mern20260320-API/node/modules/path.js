import path from "path";

import url from "url";

const filePath = "folder1/folder2/folder3/data.txt";
console.log(path.basename(filePath)); // file ko fullname chaiyo vane (file name)
console.log(path.extname(filePath)); // file ko extension matra chaiyo vane (extension name)
console.log(path.dirname(filePath)); //folder ko detail chaiyo vane (folder name)


const _filename = url.fileURLToPath(import.meta.url); // current file or folder patta laune tarika.

console.log(_filename);

