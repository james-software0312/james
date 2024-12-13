import React from "react";

import Navbar from "../Component/navbar";

export default function Layout2(props) {

    return(
        <div className="bg-F9FAFE">
            <Navbar></Navbar>
            <div>
                {
                    props.children
                }

            </div>
            
        </div>
    )
}