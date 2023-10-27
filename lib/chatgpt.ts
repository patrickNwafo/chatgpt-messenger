// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_key,
// });

// const openai = new OpenAIApi(configuration);

export default openai;
