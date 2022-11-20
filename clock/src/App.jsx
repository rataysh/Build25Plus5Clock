/** @format */

import React, {useState, useEffect, useRef} from "react";
import {useGap} from "./components/useGap";
import {CntrTime} from "./components/CntrTime";
import {SetingTime} from "./components/SettingTime";
import {TimeComponent} from "./components/TimeComponent";
import sound from "./audio/sound.mp3";

export const App = () => {
    const [mode, setMode] = useState("session");
    const [active, setActive] = useState(false);
    const [sesData, setSesData] = useState(25);
    const [breakData, setBreakData] = useState(5);
    const [time, setTime] = useState(sesData * 60 * 1000);

    const beep = useRef();

    useGap(() => setTime(time - 1000), active ? 1000 : null);

    useEffect(() => {
        setTime(sesData * 60 * 1000);
    }, [sesData]);

    useEffect(() => {
        if (time === 0 && mode === "session") {
            beep.current.play();
            setMode("break");
            setTime(breakData * 60 * 1000);
        } else if (time === 0 && mode === "break") {
            beep.current.play();
            setMode("session");
            setTime(sesData * 60 * 1000);
        }
    }, [time, breakData, sesData, mode]);

    const reset = () => {
        beep.current.pause();
        beep.current.currentTime = 0;
        setActive(false);
        setMode("session");
        setBreakData(5);
        setSesData(25);
        setTime(25 * 60 * 1000);
    };

    return (
        <div className='container'>
            <main>
                <div className='time-wrapper'>
                    <TimeComponent
                        curMode={[mode, setMode]}
                        curTime={[time, setTime]}
                    />
                    <CntrTime
                        activeStatus={[active, setActive]}
                        reset={reset}
                    />
                </div>
                <div className='timeset-wrapper'>
                    <SetingTime
                        type={"Break"}
                        value={[breakData, setBreakData]}
                    />
                    <SetingTime
                        type={"Session"}
                        value={[sesData, setSesData]}
                    />
                </div>
            </main>
            <audio id='beep' src={sound} ref={beep} />
        </div>
    );
};
