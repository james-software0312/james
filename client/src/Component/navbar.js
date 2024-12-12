import React from "react";
import Digital from '../assets/img/Digital.PNG'
import Button from "./landing/button";

export default function Navbar() {
    return(
        <div className="sticky w-[100%] h-[200px] text-white fixed top-0 bg-[white] truncate">
            <div>
                <div className="bg-[#1433D6] h-[40px] flex items-center  justify-end ">
                    {/* <a href="/sdf">asdfsadf</a> */}
                    <nav className="flex gap-[10px] justify-end  ">
                        <a href="/Blog" className="hover:underline decoration-1 " >Blog</a>
                        <a href="/Docs" className="hover:underline decoration-1">Docs</a>
                        <a href="/GetSupport" className="hover:hover:underline decoration-1">Get Support</a>
                        <a href="/ContactSales" className="hover:hover:underline decoration-1">Contact Sales</a>
                        <a></a>
                    </nav>
                </div>
                <div className="h-[60px] flex justify-between">
                    <img src = {Digital}></img>
                    <div className="hidden lg:flex gap-[25px] items-center ">
                        <Button label = "Product"/>
                        <Button label = "Solutions"/>
                        <Button label = "Developers"/>
                        <Button label = "Partners"/>
                        <Button label = "Pricing"/>
                    </div>
                    <div className="flex gap-[25px] items-center">
                        <Button label = 'Log in'/>
                        <Button label = 'Sign up'/>
                        <Button label = ''/>
                    </div>
                </div>
                <hr></hr>
                <div className=" top-0 h-[60px] flex justify-center gap-[30px] items-center">
                    <Button label = "New"/>
                    <Button label = "Product Updates"/>
                    <Button label = "Cloud Education"/>
                    <Button label = "Engineering"/>
                    <Button label = "Partner News"/>
                    <Button label = "Community"/>
                    <Button label = "Trust Security"/>
                    <Button label = "Culture"/>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}