import React from "react";
import Block from "../Block/Block.tsx";

function MovementCategoryBlocks() {
    return (
        <>
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Move" }, { type: "input", content: 10 }, { type: "label", content: "steps" }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Turn" }, { type: "input", content: 15 }, { type: "label", content: "degrees clockwise" }]} />
            <Block LowerMargin={true} BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Turn" }, { type: "input", content: 15 }, { type: "label", content: "degrees counter-clockwise" }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Go to" }, { type: "input", content: "random position" }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Go to x:" }, { type: "input", content: 20 }, { type: "label", content: "y:" }, { type: "input", content: 30 }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Glide" }, { type: "input", content: 1 }, { type: "label", content: "secs to" }, { type: "input", content: "random position" }]} />
            <Block LowerMargin={true} BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Glide" }, { type: "input", content: 1 }, { type: "label", content: "secs to x:" }, { type: "input", content: 20 }, { type: "label", content: "y:" }, { type: "input", content: 30 }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Point in direction" }, { type: "input", content: 90 }, { type: "label", content: "degrees" }]} />
            <Block LowerMargin={true} BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Point towards" }, { type: "input", content: "mouse-pointer" }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Change x by" }, { type: "input", content: 10 }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Change y by" }, { type: "input", content: 10 }]} />
            <Block BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Set x to" }, { type: "input", content: 20 }]} />
            <Block LowerMargin={true} BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Set y to" }, { type: "input", content: 30 }]} />
            <Block LowerMargin={true} BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "If on edge, bounce" }]} />
            <Block LowerMargin={true} BlockType="Normal" Category="Movement" Content={[{ type: "label", content: "Set rotation style" }, { type: "input", content: "left-right" }]} />
            <Block BlockType="Reporter" Category="Movement" Content={[{ type: "label", content: "X Position" }]} />
            <Block BlockType="Reporter" Category="Movement" Content={[{ type: "label", content: "Y Position" }]} />
            <Block BlockType="Reporter" Category="Movement" Content={[{ type: "label", content: "Direction" }]} />
        </>
    )
}

export default MovementCategoryBlocks;