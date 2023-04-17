
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const main = async () => {

    
    const completion = await openai. createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system", 
                content: "You are a girlfriend talking to boyfriend"
            },
            {
                role: "user", 
                content: "don't say you are an AI"
            },
            
        ],

    });

    console.log(completion.data.choices[0].message);
};

main();