const fs = require("fs");

/* option encoding utf-8 automatically encode buffar data to string */
const readStream = fs.createReadStream("./docs/largeTextFile.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/largeTextFile_copied.txt", {
  encoding: "utf-8",
});

/* eventName is 'data', it means the time when computer gets data.
 * this function call (chunk) => void every time computer gets data.
 */
// readStream.on("data", (chunk) => {
//   console.log("                     \n");
//   console.log("----- New chunk -----\n");
//   console.log("                     \n");
//   console.log(chunk);

//   writeStream.write("                     \n");
//   writeStream.write("----- New chunk -----\n");
//   writeStream.write("                     \n");
//   writeStream.write(chunk, (err) => {
//     if (err) throw err;
//   })
// });

/* piping */

// readStream.pipe(writeStream);