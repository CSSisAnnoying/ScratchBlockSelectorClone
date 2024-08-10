import Sidebar from "./Sidebar/Sidebar.tsx";
import "./BlockSelector.css";
import React, { useRef, useState } from "react";
import Scroller from "./Scroller/Scroller.tsx";

function BlockSelector() {
    const [isHeldDown, setHeldDownState] = useState(false);
    const scrollerElement = useRef<HTMLDivElement>(null);

    const onMouseMove = (e) => {
        e.preventDefault();
        if (!isHeldDown) return;
        if (!scrollerElement.current) return;

        scrollerElement.current.scrollTop += e.movementY;
    }

    return (
        <div ref={scrollerElement} className="block-selector" onMouseMove={(e) => onMouseMove(e)} /*onMouseOut={() => setHeldDownState(false)}*/ onMouseDown={() => setHeldDownState(true)} onMouseUp={() => setHeldDownState(false)}>
            <Sidebar />
            <Scroller />
        </div>
    )
}

export default BlockSelector;