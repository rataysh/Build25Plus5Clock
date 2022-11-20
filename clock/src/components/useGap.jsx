/** @format */

import {useEffect, useRef} from "react";

export function useGap(clb, pause) {
    const dataClb = useRef();
    useEffect(() => {
        dataClb.current = clb;
    }, [clb]);
    useEffect(() => {
        function tick() {
            dataClb.current();
        }
        if (pause !== null) {
            let id = setInterval(tick, pause);
            return () => clearInterval(id);
        }
    }, [pause]);
}
