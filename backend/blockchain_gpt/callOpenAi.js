const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const configuration = new Configuration({
  apiKey