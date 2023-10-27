// import { OpenAIApi } from "openai";

// const openai = new OpenAIApi({
//     api_key: process.env.OPENAI_API_KEY,
// });

// const { OpenAIApi } = require("openai");

// const openai = new OpenAIApi({
//     api_key: "API_KEY",
// });

// export default openai;

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
