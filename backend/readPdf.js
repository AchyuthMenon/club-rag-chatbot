const fs = require("fs");
const pdf = require("pdf-parse");
const chunkText = require("./utils/chunkText");
async function readPDF() {
  const dataBuffer = fs.readFileSync(
    "./docs/ieeePolicies.pdf"
  );

  const data = await pdf(dataBuffer);

  const chunks = chunkText(data.text);

console.log("Number of chunks:", chunks.length);

console.log("Chunks:", chunks.length);

console.log("----------------");
console.log("Chunk 1");
console.log(chunks[0]);

console.log("----------------");
console.log("Chunk 2");
console.log(chunks[1]);

console.log("----------------");
console.log("Chunk 3");
console.log(chunks[2]);
}

readPDF();