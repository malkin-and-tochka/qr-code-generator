import QRCode from "qrcode.react";
import {useState} from "react";
import style from './App.module.css'
import sun from '../src/assets/Sun.svg'

function App() {
    const [qrCode, setQrCode] = useState('https://github.com/malkin-and-tochka')
    const [mode, setMode] = useState(1)
    const pushQrCode = (e) => {
        setQrCode(e.target.value)
    }
    const changeMode = () => {
        setMode(prev => !prev)
        const btn = document.getElementById('btn')
        if (mode) {
            btn.style.paddingLeft = '44px'
            btn.style.paddingRight = '0px'
            btn.style.background = '#0A2237'
        } else {
            btn.style.paddingRight = '44px'
            btn.style.paddingLeft = '0px'
            btn.style.background = '#9CD1FF'
        }

    }
    return (
        <div className={mode ? style.lightApp : style.darkApp}>
            <p>Write your request</p>
            <input className={mode ? style.lightInput : style.darkInput} onChange={pushQrCode} type="text"
                   placeholder='write your link here'/>
            <QRCode bgColor={mode ? '#fff' : '#000'} fgColor={!mode ? '#fff' : '#000'} size={256} value={qrCode}/>
            <button id='btn' className={!mode ? style.darkBtn : style.lightBtn} onClick={changeMode}>
                <svg width="36" height="36" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {mode ? <circle cx="64" cy="64" r="64" fill="#FFB902"/> :
                        <circle cx="64" cy="64" r="64" fill="#C3C4CB"/>}
                    {mode ? null : <circle cx="79" cy="43" r="9" fill="#AAACB9"/>}
                    {mode ? null : <circle cx="37.5" cy="55.5" r="19.5" fill="#AAACB9"/>}
                    {mode ? null : <circle cx="68.5" cy="93.5" r="11.5" fill="#AAACB9"/>}
                </svg>
            </button>
        </div>
    );
}

export default App;
