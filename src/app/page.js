"use client"
import Moneybag from "./components/moneyBag";
import AddMoneyBag from "./components/addMoneyBag";
import {useState} from "react";
import { Fragment } from "react";

export default function Home() {
  const [bags, setBags] = useState([])
  const [popupVisibility, setPopupVisibility] = useState('hidden')
  // const addMoneyBag = () => {
  //   let index = bags.length;
  //   setBags([...bags, {name: "bonk", amount: "", index: index}])
  // }
  const editMoneyBag = (index, name, amount) => {
    let bagCopy = [...bags];
    bagCopy.map((bag) => {
      if (bag.index === index) {
        console.log(`${bag.index} matched with ${index}`)
      }
    });
  }
  const deleteMoneyBag = (index) => {
    console.log(index);
    let bagCopy = [...bags];
    let newBagArr = [];
    bagCopy.map((bag) => {
      if (bag.index === index) {
        bagCopy = bagCopy.filter((item) => item.index !== index)
      } 
    });
    setBags([...bagCopy]);
  }
  const hidePopup = () => {
    setPopupVisibility('hidden');
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
      <h1 className='text-4xl font-medium'>Money Bags</h1>
      <div className='border-t-4 border-[#4BC789] w-[210px]'></div>
      </div>
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <AddMoneyBag visibility={popupVisibility} hide={hidePopup}/>
        {bags.map((item, index) => (
          <Fragment key={index}>
          <Moneybag name={item.name} index={item.index} edit={editMoneyBag} del={deleteMoneyBag}/>
          </Fragment>
        ))}
        <div className="flex items-center justify-center content-center h-[250px] w-[200px]">
          <button className="bg-slate-100 hover:bg-[#82D9AD] font-medium px-1 rounded" onClick={() => {setPopupVisibility('absolute')}}>Add Money bag</button>
        </div>
      </main>
    </div>
  );
}
