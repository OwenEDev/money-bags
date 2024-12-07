import {useState, useEffect} from "react";

const Moneybag = ({name, amount, index, del} ) => {
    const [text, setText] = useState('');

    return (
        <div className="flex-col content-center h-[250px] w-[200px] rounded-3xl bg-[#4BC789]">
            <div className="my-[10px]">
            <h1 className="text-center font-bold text-slate-50 text-6xl">{amount}</h1>
            <h1 className="text-center font-bold text-slate-50 text-2xl">{name}</h1>
            </div>
            
            <div className="my-[10px] mx-10">
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[5px]">Add Purchase</button>
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[1px]">Summary</button>
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[1px]" onClick={() => {del(name)}}>Del</button>
            </div>
            
        </div>
    )
}
export default Moneybag;