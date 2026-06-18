require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function main() {
  console.log("Starting...");
  console.log(
    "Key loaded:",
    process.env.GEMINI_API_KEY
      ? process.env.GEMINI_API_KEY.slice(0, 10)
      : "undefined"
  );

  const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

  console.log("Created client");

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  console.log("Created model");

  const result = await model.generateContent(
    "Say hello"
  );

  console.log("Got result");

  console.log(result.response.text());
}

main().catch((err) => {
  console.error("ERROR:");
  console.error(err);
});