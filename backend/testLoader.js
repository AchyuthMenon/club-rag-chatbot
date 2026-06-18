const loadPDF = require("./services/pdfLoader");

async function test() {
  const text = await loadPDF();

  console.log(text.slice(0, 1000));
}

test();