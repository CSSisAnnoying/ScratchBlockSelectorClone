import React, { useEffect, useRef, useState } from "react";

type PropTypes = {
    defaultText: string;
}

function Input({ defaultText }: PropTypes) {
    const [text, setText] = useState(defaultText);
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        input.current?.style.setProperty("width", `${text.length}ch`);
    }, []);

    const onTextUpdated = (e) => {
        setText(e.target.value);
        e.target.style.setProperty("width", `${e.target.value.length}ch`);
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.target.blur();
        }
    }

    return (
        <input ref={input} onKeyDown={onKeyDown} onFocus={() => input.current?.select()} value={text} onChange={(e) => onTextUpdated(e)} type={typeof (defaultText)} />
    )
}

export default Input;