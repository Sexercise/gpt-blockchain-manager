const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});




const openai = new OpenAIApi(configuration);


let callOpenAi = async (prompt) => {

  prompt = p