/** @format */

import React from "react";
import moment from "moment";

export const TimeComponent = ({curMode, curTime}) => {
    const [mode] = curMode;
    const [time] = curTime;
    return (
        <div>
            <h2 id='timer-label'>{mode === "session" ? "SESSION" : "BREAK"}</h2>
            <h3 id='time-left'>
                {time === 3600000
                    ? moment(time).format("60:00")
                    : moment(time).format("mm:ss")}
            </h3>
        </div>
    );
};
