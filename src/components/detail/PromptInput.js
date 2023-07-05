import React, {useCallback, useState} from 'react'
import Loader from '@/components/loaders/Loader'
import Image from 'next/image'
import VoiceForm from '@/components/speech/VoiceForm'

export default function PromptInput({completion, setCompletion}) {

    const [value, setValue] = useState('')

    const handleInput = useCallback(
        (e) => {
            setValue(e.target.value)
        }, [])

    const sendPrompt = useCallback(
        async (e) => {

            if(!value){
                return false
            }

            if (e.key === 'Enter' || e.type === 'click') {
                setCompletion(true)
                const response = await fetch('/api/prompt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text: value}),
                })

                const data = await response.json()

                if(!data.result){
                    return setCompletion({
                        data: 'Your request is not available right now'
                    })
                }

                setCompletion({
                    data: data.result.choices[0].text,
                    image: data.image
                })
            }
        }, [value])

    return <div className={'prompt-input'}>
        <textarea
            value={value}
            placeholder={'Lets write a story together, type your story here'}
            onChange={handleInput}
            onKeyDown={sendPrompt}
            className={'w-full mb-4'}
        />
        <button onClick={(e) => sendPrompt(e)} className={'btn btn--pink'}>Click me</button>
        {/*{*/}
        {/*    completion &&*/}
        {/*    <Loader/>*/}
        {/*}*/}
        {
            completion.data && <>
                {/*<Image src={`data:image/jpeg;base64,${completion.image.data[0].b64_json}`} width={200} height={200} alt={'image'} />*/}
                <div className={'my-8 italic'}><span className={'block bold mb-8'}>The story:</span> {completion.data.split('\n').map(item => <>{item}<br/></>)}</div>
                <VoiceForm textValue={completion.data}/>
            </>
        }
    </div>
}
