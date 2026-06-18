const fs = require("fs");
const pdf = require("pdf-parse");

async function readPDF() {
  const dataBuffer = fs.readFileSync(
    "./docs/ieeePolicies.pdf"
  );

  const data = await pdf(dataBuffer);

  console.log(data.text);
}

readPDF();