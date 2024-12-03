const Moneybag = ({name}) => {
    return (
        <div className="flex-col content-center px-10 h-[250px] w-[200px] border-radius-10  rounded-md bg-[#4BC789]">
            <div className="my-[10px]">
            <h1 className="text-center font-bold text-slate-50 text-6xl">£47</h1>
            <h1 className="text-center font-bold text-slate-50 text-2xl">{name}</h1>
            </div>
            
            <div className="my-[10px]">
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[5px]">Add Purchase</button>
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[1px]">Summary</button>
            </div>
            
        </div>
    )
}
export default Moneybag;