import React from "react";

export default function DigitalButton(props) {
    console.log(props.color);
    return(
        <button className={`bg-[#${props.color}] text-[#111] font-medium text-[17px] rounded-[12px] p-[10px] transition-background duration-300 hover:bg-[#0069FF] hover:text-[white]`}>
            {props.label}
        </button>
    )
}