/** @format */

import React from "react";
import {
    BsFillArrowUpCircleFill,
    BsFillArrowDownCircleFill,
} from "react-icons/bs";

export const SetingTime = ({type, value}) => {
    const [val, setVal] = value;
    const increment = () => {
        if (val >= 60) {
            return null;
        } else {
            setVal(val + 1);
        }
    };
    const decrement = () => {
        if (val === 1) {
            return null;
        } else {
            setVal(val - 1);
        }
    };
    return (
        <div className='control'>
            <h2 id={`${type.toLowerCase()}-label`}>{type} Length</h2>
            <button id={`${type.toLowerCase()}-increment`} onClick={increment}>
                <BsFillArrowUpCircleFill />
            </button>
            <h3 id={`${type.toLowerCase()}-length`}>{val}</h3>
            <button id={`${type.toLowerCase()}-decrement`} onClick={decrement}>
                <BsFillArrowDownCircleFill />
            </button>
        </div>
    );
};
