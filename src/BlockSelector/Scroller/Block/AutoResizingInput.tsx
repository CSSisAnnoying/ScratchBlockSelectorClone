import React, { useEffect, useRef, useState } from "react";

type PropTypes = {
    defaultText: string;
}

function Input({defaultText }: PropTypes) {
    const [text, setText] = useState(defaultText);
    const input = useRef<HTMLInputElement>(null);

    const onTextUpdated = (e) => {
        setText(e.target.value);
        e.target.style.setProperty("width", `${e.target.value.length}ch`);
    }

    useEffect(() => {
        if (!input.current) return;
        input.current.style.setProperty("width", `${text.length}ch`);
    }, [text]);

    return (
        <input ref={input} onFocus={() => input.current?.select()} value={text} onChange={(e) => onTextUpdated(e)} type={typeof(defaultText)} />
    )
}

export default Input;