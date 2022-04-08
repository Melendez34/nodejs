const { timeLog } = require("console");
const fs = require("fs");

console.time("tiempo de respuesta");
// for (let i = 0; i < 10; i++) {
//   fs.readFileSync("./archivo.txt", "utf-8");
// }
for (let i = 0; i < 5; i++) {
  const stream = fs.createReadStream("archivo.txt", { encoding: "utf-8" });
}
console.timeEnd("tiempo de respuesta");
