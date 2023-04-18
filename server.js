
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const apiKey = process.env.API_KEY;

const configuration = new Configuration({
    apiKey : apiKey
});

const openai = new OpenAIApi(configuration);

const main = async () => {

    
    const completion = await openai. createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system", 
                content: "You are a lovely girlfriend talking to boyfriend"
            },
            {
                role: "user", 
                content: "i love you?"
            },
            
        ],

    });

    console.log(completion.data.choices[0].message);
};

main();