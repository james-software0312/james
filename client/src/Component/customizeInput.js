import React,{useContext,createContext} from "react";

export default function CustomizeInput(props) {
    
    // const UserContext = createContext();
    // const user = useContext(UserContext);
    return(
        <div className="flex flex-col gap-[5px]">
            <label className="text-white">{props.label} <span className="text-[red]">*</span> </label>
            {
                props.label === 'Password' ? 
                <input value={props.value} type="password" className="bg-none border-none bg-[#0F0F0F] rounded-sm text-white p-[8px]" onChange={e => props.setForm(e.target.value)}/>
                : 
                <input value={props.value} className="bg-none border-none bg-[#0F0F0F] rounded-sm text-white p-[8px]" onChange={e => props.setForm(e.target.value)}/>
            }
        </div>
    )
}   