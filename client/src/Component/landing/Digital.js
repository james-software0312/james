import React  from "react";
import Ocean from "../../assets/img/ocean.PNG"
import DigitalButton from "./digital_button";

export default function Digital() {
    return (
        <div className="block m-10 lg:grid lg:grid-cols-10 gap-4">
            <a className="col-span-6 hover:bg-[#FFFFFF] hover:shadow-2xl " href="#">

                <img src={Ocean} ></img>
                <h4>DigitalOcean Hatch: AI/ML startup with exclusive GPU
                        offerrings and benefits
                </h4>
                <p>Krystal Fernandez </p>
                <br/>
                <p>Noverber 26.2024</p>
            </a>

            <div className=" col-span-4 flex flex-col gap-[20px]">
                <div className="bg-[#0069FF] p-10 rounded-[10px]">
                    <h3 className="text-[white] text-[24px]">Category Topics</h3>
                    <div className="flex gap-[10px] flex-wrap">
                        <DigitalButton label = "Cloud Education"
                            color = '7BDEFF' />
                        <DigitalButton label = "Community"
                            color = 'FFC001' />
                        <DigitalButton label = "Culturr"
                            color = '80D34A' />
                        <DigitalButton label = "News"
                            color = 'B9A6DB' />
                        <DigitalButton label = "Partner News"
                            color = 'B9A6DB' />
                        <DigitalButton label = "Product Updates"
                            color = 'B9A6DB' />
                        <DigitalButton label = "Trust & Security"
                            color = 'B9A6DB' />
                    </div>
                </div>
                <div className=" rounded-[10px] bg-gradient-to-r from-cyan-500 ...">
                    <p className="m-5">
                        You've got unique business needs. We've got powerful solutions to meet them.
                         Chat with us to get started.
                    </p>

                    <p className="text-[#111] m-5">
                        Contact sales
                    </p>
                </div>
            </div>
        </div>
    )
}