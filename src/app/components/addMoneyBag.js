import { useState, useEffect } from "react";
import CustomButton from "./customButton";
import CustomInput from "./customInput";

const AddMoneyBag = ({visibility, hide, addMoneyBag}) => {
    const [bagName, setBagName] = useState('');
    const [bagAmount, setBagAmount] = useState('');

    return (
        <div tabIndex="-1" aria-hidden="true" className={`${visibility} overflow-y-auto overflow-x-hidden fixed justify-center items-center w-[50%] md:inset-0 h-[calc(100%-1rem)] max-h-full my-[150px] mx-[25%]`}>
    <div className="relative p-4 w-full max-h-full">
        <div className="relative bg-white rounded-lg">
            <div className="flex flex-col justify-between p-4 md:p-5 border-b rounded-t">
                <div className="flex flex-row h-[50px] w-[100%]">
                    <h3 className="text-xl font-semibold text-black pb-[40px]">
                        Add Moneybag
                    </h3>

                    <button type="button" className="text-gray-400 bg-transparent hover:bg-[#4BC789] hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => {hide()}}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
      
                <div className="flex flex-col items-center">
                    <CustomInput placeholder={"Name your money bag"} onChange={setBagName} value={bagName}/>
                    <CustomInput placeholder={"Enter your budget"} onChange={setBagAmount} value={bagAmount}/>
                    <CustomButton buttonText={"Save and Add"} onClick={() => {addMoneyBag(bagName, bagAmount); hide();}}/>
                </div>

            </div>
        </div>
    </div>
</div>
    )
}

export default AddMoneyBag;