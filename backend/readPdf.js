import fs from "fs";
import pdf from "pdf-parse";
import chunkText from "./utils/chunkText.js";

async function readPdf() {
  const dataBuffer = fs.readFileSync("./docs/ieeePolicies.pdf");

  const data = await pdf(dataBuffer);

  const chunks = chunkText(data.text);

  console.log("Number of chunks:", chunks.length);

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

readPdf();