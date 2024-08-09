import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store.ts";
import { categories } from "../../Redux/CategoryInfo.ts";

function SelectionOverlay() {
    const category = useSelector((state: RootState) => state.category.category);
    let index = categories.indexOf(category.toString());
    let transformAmount = index * 100;
    let style = {transform: `translateY(${transformAmount}%)`};

    useEffect(() => {
        const headers = document.querySelectorAll(".category-header");
        headers.forEach((header) => {
            if (header.innerHTML === category) {
                console.log("scroll");
                header.scrollIntoView({behavior: "smooth"})
            }
        });
    }, [category]);

    return (
        <div style={style} className="selection-overlay"></div>
    )
}

export default SelectionOverlay;