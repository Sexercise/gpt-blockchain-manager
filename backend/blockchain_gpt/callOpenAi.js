const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});




const openai = new OpenAIApi(configuration);


let callOpenAi = async (prompt) => {

  prompt = preprocess(prompt);
 console.log(prompt);
  const completion = await openai.createChatCompletion({
    model: "gpt-4",//"gpt-3.5-turbo",
    messages: [
      
      { role: "assistant", content: readContentfromFile('assistant.txt')},
      { role: "user",
      content: prompt },
    ],
  })