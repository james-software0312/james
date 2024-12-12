import React from "react";

import Login from "../pages/auth/singUp";

export default function Layout(props) {
    return(
        <div className="bg-gradient-to-r from-[#081010] to-[#040404] w-[100%] h-[100vh] ">
            <div className="float-left">
                <h5 className="text-white hidden md:block">Agora</h5>
            </div>
            <div className="justify-center items-center flex h-[100vh]">
                {
                    props.children
                }

            </div>
        </div>
    )
}