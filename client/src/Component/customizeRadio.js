import React, {useState, useEffect} from "react";
import checkImage from '../assets/img/check.png'


export default function CustomizeRadio(props) {
    const [checkingState, setState] = useState(props.value)
    function handleChange() {
        setState(!checkingState);
    }
    return(
        <div className="flex gap-[5px]">
            {
                checkingState? <img src={checkImage} width={'20'} height={'20'} onClick={handleChange}></img>
                    : <div className="w-[20px] h-[20px] rounded-[10px] bg-[#333]" onClick={handleChange}></div> 
            } 
            <label className="text-white">{props.label}</label>
        </div>
    )
}