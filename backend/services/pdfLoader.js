const fs = require("fs");
const pdf = require("pdf-parse");

async function loadPDF() {
  const dataBuffer = fs.readFileSync(
    "./docs/ieeePolicies.pdf"
  );

  const data = await pdf(dataBuffer);

  return data.text;
}

module.exports = loadPDF;