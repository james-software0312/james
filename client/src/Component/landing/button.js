import React from "react";

export default function Button(props) {
    function handleClick() {
        if(props.label === 'Log in') {
            window.location.href = '/login'
        } else if(props.label === 'Sign up') {
            window.location.href = '/signup'
        }
    }
    return(
        <button className="text-[#636F8C] font-medium text-[17px] rounded-[12px] p-[10px] transition-background duration-300 hover:bg-[#0069FF] focus:bg-[#E3E8F4] hover:text-[white] "
            onClick={handleClick}>
            {props.label}
        </button>
    )
}