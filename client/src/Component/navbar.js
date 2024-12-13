import React from "react";
import Digital from '../assets/img/Digital.PNG'
import Button from "./landing/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
    const loggin = useSelector(store => store.authState);
    return(
        <div className="sticky w-[100%] h-[200px] text-white fixed top-0 bg-[white] truncate">
            <div>
                <div className="bg-[#1433D6] h-[40px] flex items-center  justify-end ">
                    <nav className="flex gap-[10px] justify-end  ">
                        <Link to="/article" className="hover:underline decoration-1 " >Article</Link>
                        <Link to="/Docs" className="hover:underline decoration-1">Docs</Link>
                        <Link to="/GetSupport" className="hover:hover:underline decoration-1">Get Support</Link>
                        <Link to="/ContactSales" className="hover:hover:underline decoration-1">Contact Sales</Link>
                        <Link></Link>
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
                        {
                            loggin.loggedIn
                                ?<>
                                    <Button label = 'Log out' />
                                    <Button label = ''/>
                                </>
                                :<>
                                    <Button label = 'Log in'/>
                                    <Button label = 'Sign up'/>
                                    <Button label = ''/>
                                    <Button label = ''/>
                                </>
                        }
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