import React from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../Redux/Slices/CategorySlice.ts";
import { categoryColors } from "../../Redux/CategoryInfo.ts";

function Category({ Category }) {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(changeCategory({category: Category}))} className="category">
            <div style={categoryColors[Category]}></div>
            <span>{Category}</span>
        </button>
    )
}

export default Category;