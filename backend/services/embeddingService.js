import ollama from "ollama";

export async function embedTexts(texts) {
  const batchSize = 25;
  const embeddings = [];

  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);

    console.log(
      `Embedding batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
        texts.length / batchSize
      )}`
    );

    const response = await ollama.embed({
      model: "nomic-embed-text",
      input: batch,
    });

    embeddings.push(...response.embeddings);
  }

  return embeddings;
}