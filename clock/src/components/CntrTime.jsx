/** @format */

import React from "react";
import {BsFillPauseCircleFill, BsFillPlayCircleFill} from "react-icons/bs";
import {BiReset} from "react-icons/bi";

export const CntrTime = ({activeStatus, reset}) => {
    const [active, setActive] = activeStatus;
    return (
        <div className='controls-wrapper'>
            <button id='start_stop' onClick={() => setActive(!active)}>
                {active ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
            </button>
            <button id='reset' onClick={reset}>
                <BiReset />
            </button>
        </div>
    );
};
