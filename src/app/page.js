"use client"
import Moneybag from "./components/moneyBag";
import AddMoneyBag from "./components/addMoneyBag";
import {useState} from "react";
import { Fragment } from "react";
import CustomButton from "./components/customButton";
import AddPurchase from "./components/addPurchase";

export default function Home() {
  const [bags, setBags] = useState([])
  const [addMoneybagVisibility, setAddMoneybagVisibility] = useState('hidden')
  const [addPurchaseVisbility, setAddPurchaseVisibility] = useState('hidden');
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const addMoneyBag = (name, amount) => {
    let index = bags.length;
    setBags([...bags, {name: name, amount: amount}])
  }
  // const editMoneyBag = (index, name, amount) => {
  //   let bagCopy = [...bags];
  //   bagCopy.map((bag) => {
  //     if (bag.index === index) {
  //       console.log(`${bag.index} matched with ${index}`)
  //     }
  //   });
  // }
  const deleteMoneyBag = (name) => {
    let bagCopy = [...bags];
    bagCopy.map((bag) => {
      if (bag.name === name) {
        bagCopy = bagCopy.filter((item) => item.name !== name)
      } 
    });
    setBags([...bagCopy]);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
      <h1 className='text-4xl font-medium'>Money Bags</h1>
      <div className='border-t-4 border-[#4BC789] w-[210px]'></div>
      </div>
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <AddMoneyBag visibility={addMoneybagVisibility} hide={() => {setAddMoneybagVisibility('hidden')}} addMoneyBag={addMoneyBag}/>
        <AddPurchase visibility={addPurchaseVisbility} hide={() => {setAddPurchaseVisibility('hidden')}} setPurchaseHistory={setPurchaseHistory} purchaseHistory={purchaseHistory}/>
        {bags.map((item, index) => (
          <Fragment key={index}>
          <Moneybag name={item.name} amount={item.amount} del={deleteMoneyBag} addPurchaseVisibility={setAddPurchaseVisibility}/>
          </Fragment>
        ))}
        <div className="flex items-center justify-center content-center h-[250px] w-[200px]">
          <CustomButton onClick={() => {setAddMoneybagVisibility('absolute')}} buttonText={"Add Money Bag"}/>
        </div>
      </main>
    </div>
  );
}
