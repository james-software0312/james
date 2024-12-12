import React from "react";

export default function List() {
    let company = ['About','Leadership', 'Blog', 'Careers', 'Customers', 'Partners', 'Referral Program', 'Affiliate Program',
        'press', 'Legal', 'Privacy Policy', 'Security', 'Investor Relations', 'DO Impact', 'Nonprofits'];
    let products = ['Overview', 'Droplets', 'Kubernets', 'Functions', 'App Platform', 'GPU Droplets', '1-Click Models', 'GenAI Platform', 'Bare Metal',
        'Load Balancers', 'Managed Databases', 'Spaces', 'Block Storage', 'Api', 'Uptime', 'Identify Access', 'Management', 'Cludways'];
    let resources = ['Community Tutorials', 'Community Q&A', 'CSS-Tricks', 'Write for DOnations', 'Currents Research'];
    let solutions = ['Website Hosting', 'VPS Hosting', 'Web &Mobile Apps', 'Game Developement', 'Game Developement', 'Streaming', 'VPN', 'SaaS Platforms',
        'Cloud Hosting for BlockChain', 'Startup Resources'];
    let contact = ['Support', 'Sales', 'Report Abuse', 'System Status', 'Share your ideas'];
    return(
        <div className="grid grid-cols-5 m-40">
            <div className="flex flex-col">
                <h1 className="m-2 font-bold mb-[25px] text-[16px]">Company</h1>
                {
                    company.map(item => 
                        <a key = {item} className="m-2 text-[#636F8C]"> {item}</a>
                    )
                }
            </div>
            <div className="flex flex-col">
                <h1 className="m-2 font-bold mb-[25px] text-[16px]">Products</h1>
                {
                    products.map(item => 
                        <a key = {item} className="m-2 text-[#636F8C]"> {item}</a>
                    )
                }
            </div>
            <div className="flex flex-col">
                <h1 className="m-2 font-bold mb-[25px] text-[16px]">Resources</h1>
                {
                    resources.map(item => 
                        <a key = {item} className="m-2 text-[#636F8C]"> {item}</a>
                    )
                }
            </div>
            <div className="flex flex-col">
                <h1 className="m-2 font-bold mb-[25px] text-[16px]">Solutions</h1>
                {
                    solutions.map(item => 
                        <a key = {item} className="m-2 text-[#636F8C]"> {item}</a>
                    )
                }
            </div>
            <div className="flex flex-col">
                <h1 className="m-2 font-bold mb-[25px] text-[16px]">Contact</h1>
                {
                    contact.map(item => 
                        <a key = {item} className="m-2 text-[#636F8C]"> {item}</a>
                    )
                }
            </div>
        </div>
    )
}