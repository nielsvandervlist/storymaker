import VoiceSelector from '@/components/speech/VoiceSelector'
import {useState} from 'react'
const isBrowser = () => typeof window !== 'undefined'
let synth

if(isBrowser()){
    synth = window.speechSynthesis
}

function VoiceForm({textValue}){

    const [selectedVoice, setSelectedVoice] = useState(0)

    if (!synth) {
        return <span>Aw... your browser does not support Speech Synthesis</span>
    }

    const speak = (e) => {
        e.preventDefault()

        const synth = window.speechSynthesis
        const utterance = new SpeechSynthesisUtterance(textValue)
        utterance.rate = 0.75
        utterance.voice = synth.getVoices()[selectedVoice]

        synth.speak(utterance)
    }

    return (
        <div className={'flex flex-col items-start gap-8'}>
            <div>Voices:</div>
            <VoiceSelector selected={selectedVoice} setSelected={setSelectedVoice} />
            <button className={'btn btn--pink'} onClick={(e) => speak(e)} >Speak</button>
        </div>
    )
}

export default VoiceForm
