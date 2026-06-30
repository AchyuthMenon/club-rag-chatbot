import fs from "fs";
import pdf from "pdf-parse";

async function loadPdf() {
  const dataBuffer = fs.readFileSync("./docs/ieeePolicies.pdf");

  const data = await pdf(dataBuffer);

  return data.text;
}

export default loadPdf;