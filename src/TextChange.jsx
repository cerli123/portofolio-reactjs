import React from 'react'
import { useState, useEffect } from 'react';

const TextChange = () => {
    const texts = ["llo IM' Charly", "llo IM' Charly", "llo IM' Charly"];
    const [currentText, setCurrentText] = useState("");
    const [endValue, setendValue] = useState(1);
    const [isForward, setisForward] = useState(true);
    const [index, setindex] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if (isForward) {
                setendValue((prev) => prev + 1);
            } else {
                setendValue((prev) => prev - 1);
            }

            if (endValue >= texts[index].length + 10) {
                setisForward(false);
            }
            if (endValue < 2) {
                setisForward(true);
                setindex((prev) => (prev + 1) % texts.length);
            }

        }, 54);
        return () => clearInterval(intervalid);

    }, [endValue, isForward, index, texts]);

    return (
        <div className='transition ease duration-500'>
            {currentText}
        </div>
    )
}

export default TextChange;