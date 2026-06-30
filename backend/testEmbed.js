import { embedText } from "./services/embeddingService.js";

async function main() {
  console.log("Generating embedding...");

  const embedding = await embedText("Hello world");

  console.log("Embedding length:", embedding.length);
  console.log("First 10 values:", embedding.slice(0, 10));
}

main();