const fs = require("fs");

/* reading files */

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
//   /* <Buffer 62 6c 6f 67 31 20 63 6f 6e 74 65 6e 74 20 68 65 72 65> */
//   console.log(data.toString());
//   /* blog1 content here */
// });

// /* write files */
// fs.writeFile("./docs/blog1.txt", "Hello, world\n", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("wrote now");
// });

// /* If the file doesn't exist, create the new file. */
// fs.writeFile("./docs/blog2.txt", "Hello, again\n", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("wrote again");
// });

// console.log("last line");

/* Result */
/*
last line  // this line comes here because fs.readFile and fs.writeFile are asynchronous
wrote now
wrote again
<Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 0a>
Hello, world
*/

/* Directories */

// fs.mkdir("./assets", (err) => {
//   // If already exists, err occurs.
//   if (err) throw err; 
//   console.log("Created the directory");
// });

// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', { recursive: true}, (err) => {
//     if (err) throw err;
//     console.log('Created the new directory');
//   })
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) throw err;
//     console.log('Deleted the directory');
//   })
// }

/* Delete files */

// if (fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', (err) => {
//     if (err) throw err;
//     console.log('Delete the file');
//   })
// }