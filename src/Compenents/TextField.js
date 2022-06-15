import React, { useState } from 'react';
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

const TextField = () => {
    const [textInput, setTextInput] = useState('Please enter your text');

    const { speak } = useSpeechSynthesis();
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setTextInput(result);
        }
    })

    const handleSpeak = async () => {
        await speak({ text: textInput });
    }
    return (
        <div className='my-16'>
            <div>
                <h4 className='text-blue-700 text-2xl font-medium'>Enter your text</h4>
                <textarea type="text" onChange={event => setTextInput(event.target.value)} className="shadow appearance-none border rounded w-[450px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <br />
                <button className="" onClick={handleSpeak}>
                    <img className='w-16' src='https://icon-library.com/images/transparent-speaker-icon/transparent-speaker-icon-11.jpg' alt="Speak"></img>
                </button>
            </div>

            <div>
                <h4 className='text-blue-700 text-2xl font-medium'>Voice Input</h4>
                <button onMouseDown={listen} onMouseUp={handleSpeak}>
                    <img className="w-16" onMouseUp={stop} src="https://icones.pro/wp-content/uploads/2021/12/icone-de-microphone-bleue.png" alt=""/>
                </button>
                {
                    listening && <p>I am listening.</p>
                }
            </div>

        </div>
    );
};

export default TextField;