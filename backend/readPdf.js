import fs from "fs";
import pdf from "pdf-parse/lib/pdf-parse.js";
import chunkText from "./utils/chunkText.js";
import { embedTexts } from "./services/embeddingService.js";
import { storeEmbeddings } from "./services/ingest.js";

async function readPdf() {
  try {
    console.log("Reading PDF...");

    const dataBuffer = fs.readFileSync("./docs/ieeePolicies.pdf");
    const data = await pdf(dataBuffer);

    console.log("PDF loaded successfully!");

    const chunks = chunkText(data.text);

    console.log(`Number of chunks: ${chunks.length}\n`);

    console.time("Embedding Time");

    // Generate embeddings for all chunks in one call
    const embeddings = await embedTexts(chunks);

    console.timeEnd("Embedding Time");

    console.log("\nStoring embeddings in ChromaDB...");

    await storeEmbeddings(chunks, embeddings);

    console.log("\n✅ PDF successfully ingested into ChromaDB!");
  } catch (error) {
    console.error("\n❌ Error during PDF ingestion:");
    console.error(error);
  }
}

readPdf();