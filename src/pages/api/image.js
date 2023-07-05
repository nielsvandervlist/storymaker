import {Configuration, OpenAIApi} from 'openai'

export default async function handler(req, res) {

    try {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })
        const openai = new OpenAIApi(configuration)

        const response = await openai.createImage({
            prompt: "A cute baby sea otter",
            n: 2,
            size: "1024x1024",
        });

        res.status(200).json({result: response.data})

    } catch (error) {
        res.json(error)
        res.status(405).end()
    }
}
