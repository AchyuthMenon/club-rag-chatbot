import { getCollection } from "../vectorDB/chroma.js";

export async function storeEmbeddings(chunks, embeddings) {
    const collection = await getCollection();

    await collection.add({
        ids: chunks.map((_, i) => i.toString()),
        documents: chunks,
        embeddings: embeddings,
    });

    console.log("Stored in Chroma!");
}