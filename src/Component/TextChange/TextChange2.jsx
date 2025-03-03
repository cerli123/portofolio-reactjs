import React, { useState, useEffect } from 'react';

const TextChange2 = () => {
    const texts = [
        " a passionate Web Developer specializing in React.js and modern JavaScript Aspiring AI Engineer with a focus on machine learning and deep learning  Currently studying Computer Science and exploring new technologies",
        " a passionate Web Developer specializing in React.js and modern JavaScript Aspiring AI Engineer with a focus on machine learning and deep learning  Currently studying Computer Science and exploring new technologies",
        " a passionate Web Developer specializing in React.js and modern JavaScript Aspiring AI Engineer with a focus on machine learning and deep learning  Currently studying Computer Science and exploring new technologies"
    ];
    
    const [currentText, setCurrentText] = useState("");
    const [endValue, setEndValue] = useState(1);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(2);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(2, endValue));
            
            if (isForward) {
                setEndValue(prev => prev + 1);
            } else {
                setEndValue(prev => prev - 1);
            }

            if (endValue >= texts[index].length + 5) {
                setIsForward(false);
            }
            
            if (endValue < 2) {
                setIsForward(true);
                setIndex(prev => (prev + 1) % texts.length);
            }
        }, 48);

        return () => clearInterval(intervalId);
    }, [endValue, isForward, index, texts]);

    return (
        <div className='transition ease-in-out duration-700 min-h-[60px] text-lg'>
            {currentText}
        </div>
    );
};

export default TextChange2;
