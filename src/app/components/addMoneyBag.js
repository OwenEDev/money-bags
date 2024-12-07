const AddMoneyBag = ({visibility, hide}) => {
    return (
        <div tabIndex="-1" aria-hidden="true" className={`${visibility} overflow-y-auto overflow-x-hidden fixed justify-center items-center w-[50%] md:inset-0 h-[calc(100%-1rem)] max-h-full my-[150px] mx-[25%]`}>
    <div className="relative p-4 w-full max-h-full">
        <div className="relative bg-white rounded-lg">
            <div className="flex flex-col justify-between p-4 md:p-5 border-b rounded-t">
                <span className="border-4 h-[200px] w-[100%]">
                    <h3 className="text-xl font-semibold text-black pb-[40px]">
                        Add Moneybag
                    </h3>

                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-[#4BC789]" onClick={() => {hide()}}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </span>
      
                <div>
                    <input type="text" placeholder="What are you budgeting?" className="border-2 w-[100%]"></input>
                </div>

            </div>
        </div>
    </div>
</div>
    )
}

export default AddMoneyBag;