import loadPdf from "./services/pdfLoader.js";

async function test() {
  const text = await loadPdf();

  console.log(text.slice(0, 1000));
}

test();