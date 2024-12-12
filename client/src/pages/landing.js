import React from "react";

import Layout from "../Component/layout";
import Navbar from "../Component/navbar";
import Card from "../Component/landing/card";
import Title from "../Component/landing/title";
import Digital from "../Component/landing/Digital";
import List from "../Component/landing/list";

export default function Landing() {

    function handleRedirect() {
        window.location.href = '/login'
    }
    return(
        <div className="bg-F9FAFE">
            <Navbar></Navbar>
            <h1 className="font-semibold text-[44px] block mx-auto text-[#081B4B] w-[fit-content]">
                The DigitalOcean Blog
            </h1>
            <p className="text-[24px] mx-auto w-[70%] text-center text-[#4D5B7C]">
                Dive into DigitalOcean product updates, company news,
                and educational content on how developers and startups can leverage the cloud.
            </p>
            <Digital />
            <hr></hr>
            <Title title = "DigitalOcean‘s Picks"></Title>
            <div className="inline-grid grid-cols-4 gap-4 pl-[20px] pr-[20px]">
                <Card label = "Engineering" color = '#D8C1FF'
                    content = 'Managing Kubernetes at scale with DigitalOcean'></Card>
                <Card label = "Cloud Education" color = '#7BDEFF'
                    content = 'Choosing the Right DigitalOcean offering for your AI/ML'></Card>
                <Card label = "Product Updates" color = '#00D688'
                    content = 'Introducing Maintenance and Retart Apps for DigitalOcean App Platfom'></Card>
                <Card label = "Product Updates" color = '#00D688'
                    content = 'DigitalOcean Bar Metal Gpuds: Dedicated GPU machine for advanced AI worklads'></Card>
            </div>
            <hr></hr>
            <List></List>
            
        </div>
    )
}