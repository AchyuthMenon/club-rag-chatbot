# Club RAG Chatbot - Project State

## Current Architecture

backend/
├── data/
├── docs/
│   └── ieeePolicies.pdf
├── services/
│   ├── embeddingService.js
│   ├── ingest.js
│   └── pdfLoader.js
├── utils/
│   └── chunkText.js
├── vectorDB/
│   └── chroma.js
├── readPdf.js
└── server.js

## Current Pipeline

PDF
↓
pdf-parse
↓
chunkText (1200 chars, 200 overlap)
↓
Ollama (nomic-embed-text)
↓
ChromaDB
↓
Next step: Retrieval

## Tech Stack

- Express
- Gemini 2.5 Flash
- Ollama
- nomic-embed-text
- ChromaDB (Docker)
- pdf-parse

## Completed

- PDF extraction
- Chunking
- Batch embeddings
- Chroma storage

## Next

- retrieval.js
- Connect retrieval to server.js
- Replace clubInfo with retrieved chunks
