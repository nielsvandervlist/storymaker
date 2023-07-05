import {useCallback, useEffect, useState} from 'react'

const isBrowser = () => typeof window !== 'undefined'
let synth

if(isBrowser()){
    synth = window.speechSynthesis
}

function VoiceSelector({ selected = 0, setSelected }){
    const [voices, setVoices] = useState([])

    const populateVoiceList = useCallback(() => {
        const newVoices = synth.getVoices()
        setVoices(newVoices)
    }, [])

    useEffect(() => {
        populateVoiceList()
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = populateVoiceList
        }
    }, [populateVoiceList])

    return (
        <select
            className={'btn'}
            value={selected}
            onChange={(e) => setSelected(parseInt(e.target.value))}
        >
            {voices.map((voice, index) => (
                <option key={index} value={index}>
                    {voice.name} ({voice.lang}) {voice.default && ' [Default]'}
                </option>
            ))}
        </select>
    )
}

export default VoiceSelector
