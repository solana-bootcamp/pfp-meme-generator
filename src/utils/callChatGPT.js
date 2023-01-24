import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";

const api_key = process.env.CHAT_GPT;
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT,
});


const openai = new OpenAIApi(configuration);

async function callChatGPT(meme_description) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Write me a meme caption for a meme with the following desciption: " + meme_description,
        temperature: 0,
        max_tokens: 7,
      });
      return response;
}
