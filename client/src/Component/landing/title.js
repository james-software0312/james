import React from 'react';

export default function Title(props) {
    return(
        <h1 className="font-semibold text-[24px] block  text-[#081B4B] w-[fit-content] p-7">
            {props.title}
        </h1>
    )
}