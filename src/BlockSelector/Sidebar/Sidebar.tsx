import React from "react"
import Category from "./Category.tsx";
import SelectionOverlay from "./SelectionOverlay.tsx";
import "./Sidebar.css";
import { categories } from "../../Redux/CategoryInfo.ts";

function Sidebar() {
    const categoryNodes: JSX.Element[] = [];
    categories.forEach((category) => {
        categoryNodes.push(<Category key={category} Category={category} />);
    })

    return (
        <div className="sidebar">
            <SelectionOverlay />
            {categoryNodes}
        </div>
    )
}

export default Sidebar;