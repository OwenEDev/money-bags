import {useState, useEffect} from "react";
import { deleteMoneyBagDB } from "../db-manager";

const Moneybag = ({name, budget, purchases, del, addPurchaseVisibility, setSummaryVisibility, populatePage} ) => {
    const calculateTotal = () => {
        const purchaseKeys = Object.keys(purchases);
        let amountTotal = 0;
        purchaseKeys.map((key) => {
            const amount = Number(purchases[key]);
            amountTotal = amountTotal + amount;
        })
        const total =  Number(budget) - amountTotal
        return Intl.NumberFormat().format(total);
    }
    return (
        <div className="flex-col content-center h-[250px] w-[200px] rounded-3xl bg-[#4BC789]">
            <div className="my-[10px]">
            <h1 className="text-center font-bold text-slate-50 text-5xl break-words">{`£${calculateTotal()}`}</h1>
            <h1 className="text-center font-bold text-slate-50 text-2xl break-words">{name}</h1>
            </div>
            
            <div className="my-[10px] mx-10">
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[2px]" onClick={() => {addPurchaseVisibility({visibilityState: 'absolute', moneyBagName: name})}}>Add Purchase</button>
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[2px]" onClick={() => {setSummaryVisibility({visibilityState: 'absolute', moneyBagName: name})}}>Summary</button>
            <button className="border-2 hover:bg-[#82D9AD] text-white font-medium px-1 rounded w-[100%] my-[2px]" onClick={() => {deleteMoneyBagDB(name); populatePage();}}>Del</button>
            </div>
            
        </div>
    )
}
export default Moneybag;