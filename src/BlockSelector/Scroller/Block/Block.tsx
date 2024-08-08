import React from "react";
import Input from "./AutoResizingInput.tsx";
import { categoryColors } from "../../../Redux/CategoryInfo.ts";

type LabelContent = {
    type: "label";
    content: string;
};

type InputContent = {
    type: "input";
    content: any;
};

type BlockContent = LabelContent | InputContent;

type BlockProps = {
    BlockType: string;
    Category: string;
    Content: BlockContent[];
    LowerMargin?: boolean;
};

function Block({ BlockType, Category, Content, LowerMargin }: BlockProps) {
    return (
        <div className={`block ${BlockType} ${Category}`} style={Object.assign(LowerMargin === true ? {marginBottom: "20px"} : {}, categoryColors[Category])}>
            {
                Content.map((item) => {
                    if (item.type === "label") {
                        return <p key={item.content}>{item.content}</p>;
                    } else {
                        return <Input key={item.content} defaultText={item.content} />;
                    }
                })
            }
        </div>
    )
}

export default Block;
