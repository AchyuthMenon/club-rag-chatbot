import ollama from "ollama";

export async function embedText(text) {
  const response = await ollama.embed({
    model: "nomic-embed-text",
    input: text,
  });

  return response.embeddings[0];
}