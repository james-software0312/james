import React from "react";
import Button from "./button";

export default function Card(props) {
    console.log(props.color);

    return(
        <div className="flex flex-col gap-[10px] p-5 hover:bg-[#FFFFFF] hover:shadow-2xl rounded-[10px]">
            {/* <Button label = {props.label}></Button> */}
            <span className = {`bg-[${props.color}] w-[60%] p-2 rounded-[5px] font-bold`}>{props.label}</span>
            <div className="border-box font-bold">
                {props.content}
            </div>
        </div>
    )
}