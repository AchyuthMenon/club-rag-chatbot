require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const clubInfo = require("./data/clubData");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

app.get("/", (req, res) => {
  res.send("Club RAG Chatbot Backend Running");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const prompt = `
You are a helpful club assistant.

Use ONLY the information provided in the context.

If the answer is not present in the context, reply:
"I don't have that information."

CONTEXT:
${clubInfo}

QUESTION:
${message}
`;

    console.log("\n========== NEW REQUEST ==========");
    console.log("Question:", message);

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    console.log("Response:", reply);

    res.json({
      reply,
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    res.status(500).json({
      error: "Failed to generate response",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});