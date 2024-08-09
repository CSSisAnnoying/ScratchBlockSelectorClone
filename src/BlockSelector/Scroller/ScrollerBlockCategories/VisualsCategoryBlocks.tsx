import React from "react";
import Block from "../Block/Block.tsx";

function VisualsCategoryBlocks() {
    return (
        <>
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "say"}, {type: "input", content: "Hello!"}, {type: "label", content: "for"}, {type: "input", content: 2}, {type: "label", content: "seconds"}]} />
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "say"}, {type: "input", content: "Hello!"}]} />
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "think"}, {type: "input", content: "Hmm..."}, {type: "label", content: "for"}, {type: "input", content: 2}, {type: "label", content: "seconds"}]} />
            <Block LowerMargin={true} Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "think"}, {type: "input", content: "Hmm..."}]} />

            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "switch costume to"}, {type: "input", content: "costume2"}]} />
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "next costume"}]} />
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "switch backdrop to"}, {type: "input", content: "backdrop1"}]} />
            <Block LowerMargin={true} Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "next backdrop"}]} />

            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "change size by"}, {type: "input", content: 10}]} />
            <Block LowerMargin={true} Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "set size to"}, {type: "input", content: 100}, {type: "label", content: "%"}]} />
            
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "change"}, {type: "input", content: "color"}, {type: "label", content: "effect by"}, {type: "input", content: 25}]} />
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "set"}, {type: "input", content: "color"}, {type: "label", content: "effect to"}, {type: "input", content: 0}]} />
            <Block LowerMargin={true} Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "clear graphic effects"}]} />

            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "show"}]} />
            <Block LowerMargin={true} Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "hide"}]} />

            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "go to"}, {type: "input", content: "front"}, {type: "label", content: "layer"}]} />
            <Block Category="Visuals" BlockType="Normal" Content={[{type: "label", content: "go"}, {type: "input", content: "forward"}, {type: "input", content: 1}, {type: "label", content: "layers"}]} />
            <Block Category="Visuals" BlockType="Reporter" Content={[{type: "label", content: "costume"}, {type: "input", content: "number"}]} />
            <Block Category="Visuals" BlockType="Reporter" Content={[{type: "label", content: "backdrop"}, {type: "input", content: "number"}]} />
            <Block Category="Visuals" BlockType="Reporter" Content={[{type: "label", content: "size"}]} />
        </>
    )
}

export default VisualsCategoryBlocks;