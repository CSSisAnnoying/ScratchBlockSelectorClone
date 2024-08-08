import React, { useState, useRef } from 'react';
import "./Block.css";
import { MovementCategoryBlocks, VisualsCategoryBlocks } from './ScrollerBlockCategories/ScrollerBlockCategories.tsx';

function Scroller() {
    const [isHeldDown, setHeldDownState] = useState(false);
    const scrollerElement = useRef<HTMLDivElement>(null);

    const onMouseMove = (e) => {
        if (!isHeldDown) return;
        if (!scrollerElement.current) return;

        scrollerElement.current.scrollTop += -e.movementY;
    }

    return (
        <div className="block-scroller" ref={scrollerElement} onMouseMove={(e) => onMouseMove(e)} onMouseLeave={() => setHeldDownState(false)} onMouseDown={() => setHeldDownState(true)} onMouseUp={() => setHeldDownState(false)}>
            <h1 className="category-header">Movement</h1>
            <MovementCategoryBlocks />
            <h1 className="category-header">Visuals</h1>
            <VisualsCategoryBlocks />
        </div>
    );
}

export default Scroller;

const thing = [
    { type: "label", content: "X Position" }
]