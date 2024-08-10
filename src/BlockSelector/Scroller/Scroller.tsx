import React, { useState, useRef, useEffect } from 'react';
import "./Block.css";
import { MovementCategoryBlocks, VisualsCategoryBlocks } from './ScrollerBlockCategories/ScrollerBlockCategories.tsx';

import { RootState } from '../../Redux/store.ts';
import { useSelector/*, useDispatch*/ } from 'react-redux';
// import { changeCategory } from '../../Redux/Slices/CategorySlice.ts';

function Scroller() {
    // const [categoryPositions, setCategoryPositions] = useState({});
    const categoryState = useSelector((state: RootState) => state.category);
    // const dispatch = useDispatch();

    const [isHeldDown, setHeldDownState] = useState(false);
    const scrollerElement = useRef<HTMLDivElement>(null);

    const onMouseMove = e => {
        if (!isHeldDown) return;
        if (!scrollerElement.current) return;

        scrollerElement.current.scrollTop -= e.movementY;
        // onScroll(e);
    }

    // const getCategoryPastThreshold = (scrollTop: number) => {
    //     let possibleCategory;
    //     let previousPosition;
    //     Object.keys(categoryPositions).forEach((categoryName) => {
    //         if (previousPosition) {
    //             if (scrollTop > previousPosition && scrollTop <= categoryPositions[categoryName]) {
    //                 possibleCategory = categoryName;
    //             }
    //         } else {
    //             if (scrollTop <= categoryPositions[categoryName]) {
    //                 possibleCategory = categoryName;
    //                 previousPosition = categoryPositions[categoryName];
    //             }
    //         }
    //     });
    //     return possibleCategory
    // };
    // const onScroll = e => {
    //     if (Object.keys(categoryPositions).length === 0) return;
    //     if (!scrollerElement.current) return;

    //     const scrollTop = scrollerElement.current.scrollTop;
    //     const newCategory = getCategoryPastThreshold(scrollTop);
    //     if (!newCategory) return;

    //     dispatch(changeCategory({ category: newCategory, updatedByClick: false }));
    // }

    useEffect(() => {
        if (!categoryState.updatedByClick) return;

        const headers = document.querySelectorAll(".category-header");
        headers.forEach((header) => {
            if (header.innerHTML === categoryState.category) {
                console.log("scroll");
                header.scrollIntoView({ behavior: "smooth" })
            }
        });
    }, [categoryState]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         const headers = document.querySelectorAll(".category-header");
    //         let positions = {};
    //         headers.forEach((header) => {
    //             header.scrollTo({ behavior: "instant" });
    //             positions[header.innerHTML] = scrollerElement.current?.scrollTop;
    //         });
    //         setCategoryPositions(positions);
    //     }, 1000);
    // }, []);

    return (
        <div /*onScroll={onScroll}*/ className="block-scroller" ref={scrollerElement} onMouseMove={(e) => onMouseMove(e)} onMouseLeave={() => setHeldDownState(false)} onMouseDown={() => setHeldDownState(true)} onMouseUp={() => setHeldDownState(false)}>
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