import {GoogleGemini} from "google/gemini";
import config from "../config/config.js";

const ai = new GoogleGemini({ apiKey: config.geminiApiKey});

const promptAi = async (promptMessage) => {
  const response = await ai.models.generateContent({
    model: "gemini2.5-flash",
    content: promptMessage,
  });
  console.log (response.text);
};

export default promptAi;