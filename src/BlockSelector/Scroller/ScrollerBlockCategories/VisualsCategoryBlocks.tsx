import React from "react";
import Block from "../Block/Block.tsx";

function VisualsCategoryBlocks() {
    return (
        <>
            <Block Category={"Visuals"} BlockType={"Normal"} Content={[{type: "label", content: "say"}, {type: "input", content: "Hello!"}, {type: "label", content: "for"}, {type: "input", content: 2}, {type: "label", content: "seconds"}]} />
        </>
    )
}

export default VisualsCategoryBlocks;