import {Configuration, OpenAIApi} from 'openai'

export default async function handler(req, res) {
    const MAX_RETRIES = 3; // Maximum number of retries
    let retryCount = 0;

    while (retryCount < MAX_RETRIES) {
        try {
            const configuration = new Configuration({
                apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);

            const completion = openai.createCompletion({
                model: 'text-davinci-003',
                prompt: req.body.text,
                temperature: 0.7,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                max_tokens: 20,
            });

            const images = openai.createImage({
                prompt: req.body.text,
                n: 1,
                size: '256x256',
                response_format: 'b64_json',
            });

            const [completionData, imagesData] = await Promise.all([
                completion,
                images,
            ]);

            res.status(200).json({
                result: completionData.data,
                image: imagesData.data,
            });

            return; // Exit the function if successful
        } catch (error) {
            // Handle error and retry if possible
            retryCount++;
            const backoffTime = Math.pow(2, retryCount) * 1000; // Exponential backoff formula
            await sleep(backoffTime);
        }
    }

    // If maximum retries reached, return an error response
    res.status(500).json({
        error: 'Failed to process the request after maximum retries.',
    });
}

// Helper function to sleep for a given time
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
