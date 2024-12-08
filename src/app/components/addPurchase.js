import { useState, useEffect } from "react";
import CustomButton from "./customButton";
import CustomInput from "./customInput";

const AddPurchase = ({visibility, setAddPurchaseVisibilty, setPurchaseHistory, purchaseHistory}) => {

    const [purchaseName, setPurchaseName] = useState('');
    const [purchaseAmount, setPurchaseAmount] = useState('');

    const getPurchases = () => {
        const entry = purchaseHistory.find(x => x.moneyBagName === visibility.moneyBagName)
        console.log('entry', purchaseHistory.find(x => x.moneyBagName === visibility.moneyBagName))
        // if (entry.purchases) return entry.purchases
        return []
    }

    const purchases = getPurchases();

    return (
        <div tabIndex="-1" aria-hidden="true" className={`${visibility.visibilityState} overflow-y-auto overflow-x-hidden fixed justify-center items-center w-[50%] md:inset-0 h-[calc(100%-1rem)] max-h-full my-[150px] mx-[25%]`}>
    <div className="relative p-4 w-full max-h-full">
        <div className="relative bg-white rounded-lg">
            <div className="flex flex-col justify-between p-4 md:p-5 border-b rounded-t">
                <div className="flex flex-row h-[50px] w-[100%]">
                    <h3 className="text-xl font-semibold text-black pb-[40px]">
                        Add Purchase
                    </h3>

                    <button type="button" className="text-gray-400 bg-transparent hover:bg-[#4BC789] hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => {setAddPurchaseVisibilty({visibilityState: 'hidden', moneyBagName: ''})}}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <CustomInput placeholder={"What was this purchase?"} onChange={setPurchaseName}/>
                    <CustomInput placeholder={"How much was this purchase?"} onChange={setPurchaseAmount}/>
                    <CustomButton buttonText={"Save and Add"} onClick={() => { 
                        setPurchaseHistory([...purchaseHistory, {moneyBagName: visibility.moneyBagName, purchases: [...purchases, {purchaseName: purchaseName, purchaseAmount}]}]);
                        setAddPurchaseVisibilty({visibilityState: 'hidden', moneyBagName: visibility.moneyBagName});}}/>
                </div>

            </div>
        </div>
    </div>
</div>
    )
}

export default AddPurchase;